'use client';

import { useMemo } from 'react';
import { MapPin, RefreshCcw, RotateCcw, Satellite, Shield } from 'lucide-react';
import { CopyButton } from '../CopyButton/CopyButton';
import { useIPDetails } from './useIPDetails';
import { Button } from '../Button/Button';
import { DetailsCard, DetailsCardProps } from '../DetailsCard/DetailsCard';
import { IPDetailsSkeleton } from './IPDetailsSkeleton';
import { IP_DETAILS_DATA } from '@/constants/ipDetailsData';
import './IPDetails.scss';

interface IPDetailsProps {
  ip?: string;
}

export const IPDetails = ({ ip }: IPDetailsProps) => {
  const { ipData, loading, error, refetch } = useIPDetails(ip || '');

  const ipDetails = useMemo(() => ipData && IP_DETAILS_DATA(ipData), [ipData]);

  if (loading) {
    return <IPDetailsSkeleton />;
  }

  if (error) {
    return (
      <div className="ip-details--wrapper">
        <div className="ip-details">
          <div className="ip-details--error">
            <h3>Error</h3>
            <p>{error}</p>
            <Button
              variant="error"
              onClick={refetch}
              icon={<RotateCcw size={16} />}
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!ipData) {
    return <div>No Data Available</div>;
  }

  return (
    <div className="ip-details--wrapper">
      <div className="ip-details">
        <div className="ip-details--info">
          <div className="ip-details--info-header ip-details--info-header-badge">
            <Satellite width={12} height={12} />
            <span>Your IP Address</span>
          </div>

          <div className="ip-details--info-header-badge">
            <span>{ipData.version}</span>
          </div>
        </div>

        <div className="ip-details--ip-address">
          <h2>{ipData.ip}</h2>
          <CopyButton textToCopy={ipData.ip} variant="secondary" />
        </div>

        <div className="ip-details--location">
          <MapPin size={16} />
          <span>{`${ipData.city}, ${ipData.region}, ${ipData.country_name}`}</span>
        </div>
      </div>
      <div className="ip-details--cards-grid">
        {ipDetails?.map((detail) => {
          return (
            <DetailsCard
              key={detail.id}
              icon={detail.icon}
              title={detail.title}
              value={detail.value}
              iconColor={detail.iconColor as DetailsCardProps['iconColor']}
            />
          );
        })}
      </div>

      <div className="ip-details--selected-data">
        <div className="ip-details--selected-data-info">
          <div className="ip-details--selected-data-info-title">
            <div className="ip-details--selected-data-info-icon">
              <Shield />
            </div>
            <div>Additional Details For: {ipData.ip}</div>
          </div>

          <div className="ip-details--selected-data-info-list">
            {ipData.asn && <div>ASN: {ipData.asn}</div>}
            {ipData.timezone && (
              <div>
                Time Zone: {ipData.timezone} ({ipData.continent_code})
              </div>
            )}
            {ipData.country_capital && (
              <div>Capital: {ipData.country_capital}</div>
            )}
            {ipData.org && <div>ISP: {ipData.org}</div>}
            {ipData.currency_name && (
              <div>
                Currency: {ipData.currency_name} ({ipData.currency})
              </div>
            )}
            {ipData.postal && <div>Postal Code: {ipData.postal}</div>}
            {ipData.latitude && <div>Latitude: {ipData.latitude}</div>}
            {ipData.longitude && <div>Longitude: {ipData.longitude}</div>}
          </div>
        </div>

        <div>map</div>
      </div>

      <div className="ip-details--refresh">
        <Button
          variant="primary"
          onClick={refetch}
          icon={<RefreshCcw size={16} />}
        >
          Refresh Information
        </Button>
      </div>
    </div>
  );
};
