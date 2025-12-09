import dynamic from 'next/dynamic';
import {
  BannerAd,
  DNSLookup,
  IPAddressLookup,
  TargetCards,
} from '@/components';

const IPDetails = dynamic(() =>
  import('@/components/IPDetails/IPDetails').then((mod) => mod.IPDetails),
);

export default function Home() {
  return (
    <div className="home">
      <BannerAd />
      <IPDetails />
      <TargetCards title="Which is your biggest concern about using the Internet?" />
      <IPAddressLookup />
      <DNSLookup />
    </div>
  );
}
