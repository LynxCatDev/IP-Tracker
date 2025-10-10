'use client';

import { IPDetails } from '@/components';
import { useParams } from 'next/navigation';

export default function IPPage() {
  const { ip } = useParams();
  const ipValue = Array.isArray(ip) ? ip[0] : ip;
  return (
    <div className="ip-page">
      <IPDetails ip={ipValue} />
    </div>
  );
}
