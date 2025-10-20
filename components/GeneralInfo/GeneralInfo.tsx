import { Info } from 'lucide-react';
import './GeneralInfo.scss';
import { Button } from '../Button/Button';

export const GeneralInfo = () => {
  return (
    <div className="general-info">
      <div className="general-info--content">
        <div className="general-info--icon">
          <Info size={24} color="var(--icon-color-2)" />
        </div>
        <h2>What We Do</h2>
      </div>

      <div className="general-info--description">
        <p>
          IP Tracker is a comprehensive IP address lookup tool that provides
          detailed information about any IP address. Whether you need to check
          your own IP address or look up information about another IP, we've got
          you covered.
        </p>
        <p>
          Our service automatically detects your public IP address and displays
          detailed geolocation information including your city, region, country,
          ISP (Internet Service Provider), timezone, and geographic coordinates.
          You can also manually lookup any IPv4 address to get the same
          comprehensive information.
        </p>
        <p>
          We use multiple reliable data sources and APIs to ensure accuracy, and
          we're constantly updating our database to provide you with the most
          current information available. All lookups are performed securely and
          we never store your IP address or any personal information.
        </p>
        <p>
          Whether you're a network administrator, security professional,
          developer, or just curious about IP addresses, IP Tracker provides the
          tools and information you need in a clean, easy-to-use interface.
        </p>
      </div>

      <div className="general-info--action">
        <Button href="/" variant="link">
          Check Your IP Now
        </Button>
      </div>
    </div>
  );
};
