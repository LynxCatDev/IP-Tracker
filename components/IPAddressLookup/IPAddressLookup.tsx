'use client';

import { ChangeEvent, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { useEnterKey } from '@/hooks/useEnterKey';
import { Button } from '../Button/Button';
import './IPAddressLookup.scss';

export const IPAddressLookup = () => {
  const router = useRouter();
  const [ip, setIp] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIp(e.target.value);
  };

  const handleLookup = () => {
    if (ip.trim()) {
      router.push(`/ip/${ip.trim()}`);
    }
  };

  useEnterKey({
    onEnter: handleLookup,
    disabled: !ip.trim(),
    targetRef: inputRef,
  });

  return (
    <div className="ip-address-lookup">
      <div className="ip-address-lookup--header">
        <Search />
        <span>IP Address Lookup</span>
      </div>

      <div className="ip-address-lookup--input">
        <input
          ref={inputRef}
          type="text"
          name="ip-address"
          placeholder="Enter IP address (e.g., 8.8.8.8)"
          value={ip}
          onChange={handleInputChange}
        />

        <Button variant="search" onClick={handleLookup} disabled={!ip.trim()}>
          <Search width={16} height={16} />
          Lookup
        </Button>
      </div>
    </div>
  );
};
