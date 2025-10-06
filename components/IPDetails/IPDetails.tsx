'use client';

import { useMemo } from 'react';
import { MapPin, RefreshCcw, RotateCcw, Satellite } from 'lucide-react';
import { CopyButton } from '../CopyButton/CopyButton';
import { useIPDetails } from './useIPDetails';
import { Button } from '../Button/Button';
import { DetailsCard, DetailsCardProps } from '../DetailsCard/DetailsCard';
import { IP_DETAILS_DATA } from '@/constants/ipDetailsData';
import './IPDetails.scss';

export const IPDetails = () => {
  const { ipData, loading, error, refetch } = useIPDetails();

  const ipDetails = useMemo(() => ipData && IP_DETAILS_DATA(ipData), [ipData]);

  if (loading) {
    return (
      <div className="ip-details">
        <div className="ip-details--loading">
          <div className="spinner" />
          <p>Fetching your IP information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
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
    );
  }

  if (!ipData) {
    return <div>No Data Available</div>;
  }

  return (
    <div>
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
          <span>{`${ipData.city}, ${ipData.country_name}`}</span>
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
