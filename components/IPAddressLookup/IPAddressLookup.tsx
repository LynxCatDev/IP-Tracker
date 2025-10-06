import { Search } from 'lucide-react';
import './IPAddressLookup.scss';
import { Button } from '../Button/Button';

export const IPAddressLookup = () => {
  return (
    <div className="ip-address-lookup">
      <div className="ip-address-lookup--header">
        <Search />
        <span>IP Address Lookup</span>
      </div>

      <div className="ip-address-lookup--input">
        <input
          type="text"
          name="ip-address"
          placeholder="Enter IP address (e.g., 8.8.8.8)"
        />

        <Button variant="search">
          <Search width={16} height={16} />
          Lookup
        </Button>
      </div>
    </div>
  );
};
