import dynamic from 'next/dynamic';
import { TargetCards } from '@/components/TargetCards/TargetCards';

const IPDetails = dynamic(() =>
  import('@/components/IPDetails/IPDetails').then((mod) => mod.IPDetails),
);

export default function Home() {
  return (
    <div className="home">
      <IPDetails />
      <TargetCards />
    </div>
  );
}
