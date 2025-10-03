'use client';

import {
  Clock,
  Globe,
  MapPin,
  Network,
  RotateCcw,
  Satellite,
} from 'lucide-react';
import { CopyButton } from '../CopyButton/CopyButton';
import './IPDetails.scss';
import { useIPDetails } from './useIPDetails';
import { Button } from '../Button/Button';
import { DetailsCard } from '../DetailsCard/DetailsCard';

export const IPDetails = () => {
  const { ipData, loading, error, refetch } = useIPDetails();

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
          <CopyButton textToCopy={ipData.ip} />
        </div>

        <div className="ip-details--location">
          <MapPin size={16} />
          <span>{`${ipData.city}, ${ipData.country_name}`}</span>
        </div>
      </div>
      <div className="ip-details--cards-grid">
        <DetailsCard
          icon={<MapPin />}
          title="Location"
          value={`${ipData.city}, ${ipData.country_name}`}
          iconColor="blue"
        />

        <DetailsCard
          icon={<Globe />}
          title="Country"
          value={`${ipData.country_name} (${ipData.country})`}
          iconColor="purple"
        />

        <DetailsCard
          icon={<Network />}
          title="Internet Provider"
          value={ipData.org || 'Unknown'}
          iconColor="green"
        />

        <DetailsCard
          icon={<Clock />}
          title="Timezone"
          value={ipData.timezone || 'Unknown'}
          iconColor="orange"
        />
      </div>
    </div>
  );
};
