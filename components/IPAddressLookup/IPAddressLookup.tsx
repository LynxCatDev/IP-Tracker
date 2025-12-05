'use client';

import { ChangeEvent, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, AlertCircle } from 'lucide-react';
import { useEnterKey } from '@/hooks/useEnterKey';
import { Button } from '../Button/Button';
import './IPAddressLookup.scss';

export const IPAddressLookup = () => {
  const router = useRouter();
  const [ip, setIp] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIp(e.target.value);
    setError(null);
  };

  const isValidIPv4 = (ip: string): boolean => {
    const ipv4Regex =
      /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipv4Regex.test(ip);
  };

  const isValidIPv6 = (ip: string): boolean => {
    const ipv6Regex =
      /^(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}$|^(?:[a-fA-F0-9]{1,4}:){1,7}:$|^(?:[a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}$|^(?:[a-fA-F0-9]{1,4}:){1,5}(?::[a-fA-F0-9]{1,4}){1,2}$|^(?:[a-fA-F0-9]{1,4}:){1,4}(?::[a-fA-F0-9]{1,4}){1,3}$|^(?:[a-fA-F0-9]{1,4}:){1,3}(?::[a-fA-F0-9]{1,4}){1,4}$|^(?:[a-fA-F0-9]{1,4}:){1,2}(?::[a-fA-F0-9]{1,4}){1,5}$|^[a-fA-F0-9]{1,4}:(?::[a-fA-F0-9]{1,4}){1,6}$|^:(?::[a-fA-F0-9]{1,4}){1,7}$|^::$/;
    return ipv6Regex.test(ip);
  };

  const isValidIP = (ip: string): boolean => {
    return isValidIPv4(ip) || isValidIPv6(ip);
  };

  const handleLookup = () => {
    const cleanIp = ip.trim();

    if (!cleanIp) {
      setError('Please enter an IP address');
      return;
    }

    if (!isValidIP(cleanIp)) {
      setError(
        'Please enter a valid IP address (e.g., 8.8.8.8 or 2001:4860:4860::8888)',
      );
      return;
    }

    router.push(`/ip/${cleanIp}`);
  };

  useEnterKey({
    onEnter: handleLookup,
    disabled: !ip.trim(),
    targetRef: inputRef,
  });

  return (
    <div className="ip-address-lookup">
      <div className="ip-address-lookup--header">
        <Search />
        <span>IP Address Lookup</span>
      </div>

      <div className="ip-address-lookup--input">
        <input
          ref={inputRef}
          type="text"
          name="ip-address"
          placeholder="Enter IP address (e.g., 8.8.8.8)"
          value={ip}
          onChange={handleInputChange}
          className={error ? 'input-error' : ''}
        />

        <Button variant="search" onClick={handleLookup} disabled={!ip.trim()}>
          <Search width={16} height={16} />
          Lookup
        </Button>
      </div>

      {error && (
        <div className="ip-address-lookup--error">
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
