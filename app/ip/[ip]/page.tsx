'use client';

import { useParams } from 'next/navigation';
import { BannerAd, DNSLookup, IPAddressLookup, IPDetails } from '@/components';

export default function IPPage() {
  const { ip } = useParams();
  const ipValue = Array.isArray(ip) ? ip[0] : ip;
  return (
    <div className="ip-page">
      <BannerAd />
      <IPDetails ip={ipValue} />
      <IPAddressLookup />
      <DNSLookup />
    </div>
  );
}
