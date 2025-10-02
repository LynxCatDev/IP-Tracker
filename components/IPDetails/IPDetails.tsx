'use client';

import { Satellite } from 'lucide-react';
import { IPDetailsProps } from '@/types/ip-data.interface';
import './IPDetails.scss';
import { CopyButton } from '../CopyButton/CopyButton';

interface Props {
  ipData: IPDetailsProps;
}

export const IPDetails = ({ ipData }: Props) => {
  return (
    <div className="ip-details">
      <div className="ip-details--info">
        <div className="ip-details--info-header ip-details--info-header-badge">
          <Satellite width={12} height={12} />
          <span>Your IP Address</span>
        </div>

        <div className="ip-details--info-header-badge">
          <span>IPv{ipData.ipVersion}</span>
        </div>
      </div>

      <div className="ip-details--ip-address">
        <h2>{ipData.ipAddress}</h2>
        <CopyButton textToCopy={ipData.ipAddress} />
      </div>

      <div>{`${ipData.capital}, ${ipData.countryName}`}</div>
    </div>
  );
};
