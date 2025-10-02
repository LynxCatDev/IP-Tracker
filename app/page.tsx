import dynamic from 'next/dynamic';

const IPDetails = dynamic(
  () => import('@/components/IPDetails/IPDetails').then((mod) => mod.IPDetails),
  {
    loading: () => <div>Loading...</div>,
  },
);

export default async function Home() {
  const getIPData = async () => {
    const response = await fetch(`https://freeipapi.com/api/json/`, {
      next: { revalidate: 3600 },
    });
    return response.json();
  };
  const data = await getIPData();
  console.log(data, 'response');

  return (
    <div className="home">
      <IPDetails ipData={data} />
    </div>
  );
}
