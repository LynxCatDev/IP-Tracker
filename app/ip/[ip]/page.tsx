'use client';

import { useParams } from 'next/navigation';

export default function IPPage() {
  const { ip } = useParams();
  return <div className="ip-page">ip : {ip}</div>;
}
