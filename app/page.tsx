import dynamic from 'next/dynamic';

const IPDetails = dynamic(() =>
  import('@/components/IPDetails/IPDetails').then((mod) => mod.IPDetails),
);

export default function Home() {
  return (
    <div className="home">
      <IPDetails />
    </div>
  );
}
