'use client';

import { ChangeEvent, useRef, useState } from 'react';
import { Globe, Search, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import { useEnterKey } from '@/hooks/useEnterKey';
import { Button } from '../Button/Button';
import { DNSRecord, DNSResult } from '@/types/dns.interface';
import './DNSLookup.scss';

export const DNSLookup = () => {
  const [domain, setDomain] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DNSResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDomain(e.target.value);
    setError(null);
  };

  const isValidDomain = (domain: string): boolean => {
    const domainRegex =
      /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
    return domainRegex.test(domain);
  };

  const handleLookup = async () => {
    const cleanDomain = domain
      .trim()
      .toLowerCase()
      .replace(/^(https?:\/\/)?(www\.)?/, '')
      .split('/')[0];

    if (!cleanDomain) {
      setError('Please enter a domain name');
      return;
    }

    if (!isValidDomain(cleanDomain)) {
      setError('Please enter a valid domain name (e.g., google.com)');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Using Google's DNS-over-HTTPS API for DNS lookups
      const recordTypes = ['A', 'AAAA', 'MX', 'TXT', 'NS', 'CNAME'];
      const records: DNSRecord[] = [];

      for (const type of recordTypes) {
        try {
          const response = await fetch(
            `https://dns.google/resolve?name=${cleanDomain}&type=${type}`,
            { headers: { Accept: 'application/dns-json' } },
          );

          if (response.ok) {
            const data = await response.json();
            if (data.Answer) {
              data.Answer.forEach(
                (answer: { type: number; data: string; TTL: number }) => {
                  const recordType = getRecordTypeName(answer.type);
                  records.push({
                    type: recordType,
                    value: answer.data,
                    ttl: answer.TTL,
                  });
                },
              );
            }
          }
        } catch {
          // Skip failed record type lookups
        }
      }

      if (records.length === 0) {
        setError('No DNS records found for this domain');
      } else {
        setResult({
          domain: cleanDomain,
          records: records,
          resolvedAt: new Date().toLocaleString(),
        });
      }
    } catch {
      setError('Failed to lookup DNS records. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getRecordTypeName = (type: number): string => {
    const types: { [key: number]: string } = {
      1: 'A',
      2: 'NS',
      5: 'CNAME',
      15: 'MX',
      16: 'TXT',
      28: 'AAAA',
    };
    return types[type] || `TYPE${type}`;
  };

  const getRecordColor = (type: string): string => {
    const colors: { [key: string]: string } = {
      A: 'var(--icon-color-1)',
      AAAA: 'var(--icon-color-2)',
      MX: 'var(--icon-color-3)',
      TXT: 'var(--icon-color-4)',
      NS: 'var(--icon-color-5)',
      CNAME: 'var(--icon-color-6)',
    };
    return colors[type] || 'var(--icon-color-1)';
  };

  useEnterKey({
    onEnter: handleLookup,
    disabled: !domain.trim() || loading,
    targetRef: inputRef,
  });

  return (
    <div className="dns-lookup">
      <div className="dns-lookup--header">
        <Globe />
        <span>DNS Lookup Tool</span>
      </div>

      <p className="dns-lookup--description">
        Enter a domain name to look up its DNS records including A, AAAA, MX,
        TXT, NS, and CNAME records.
      </p>

      <div className="dns-lookup--input">
        <input
          ref={inputRef}
          type="text"
          name="domain"
          placeholder="Enter domain (e.g., google.com)"
          value={domain}
          onChange={handleInputChange}
          disabled={loading}
        />

        <Button
          variant="search"
          onClick={handleLookup}
          disabled={!domain.trim() || loading}
        >
          {loading ? (
            <Loader2 width={16} height={16} className="dns-lookup--spinner" />
          ) : (
            <Search width={16} height={16} />
          )}
          {loading ? 'Looking up...' : 'Lookup'}
        </Button>
      </div>

      {error && (
        <div className="dns-lookup--error">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      {result && (
        <div className="dns-lookup--results">
          <div className="dns-lookup--results-header">
            <CheckCircle size={18} color="var(--icon-color-2)" />
            <span>
              DNS Records for <strong>{result.domain}</strong>
            </span>
            <span className="dns-lookup--timestamp">
              Resolved at {result.resolvedAt}
            </span>
          </div>

          <div className="dns-lookup--records">
            {result.records.map((record, index) => (
              <div key={index} className="dns-lookup--record">
                <span
                  className="dns-lookup--record-type"
                  style={{ backgroundColor: getRecordColor(record.type) }}
                >
                  {record.type}
                </span>
                <span className="dns-lookup--record-value">{record.value}</span>
                {record.ttl && (
                  <span className="dns-lookup--record-ttl">
                    TTL: {record.ttl}s
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="dns-lookup--legend">
            <h4>Record Types Explained:</h4>
            <ul>
              <li>
                <strong>A:</strong> IPv4 address
              </li>
              <li>
                <strong>AAAA:</strong> IPv6 address
              </li>
              <li>
                <strong>MX:</strong> Mail server
              </li>
              <li>
                <strong>TXT:</strong> Text records (SPF, DKIM, etc.)
              </li>
              <li>
                <strong>NS:</strong> Name servers
              </li>
              <li>
                <strong>CNAME:</strong> Canonical name (alias)
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
