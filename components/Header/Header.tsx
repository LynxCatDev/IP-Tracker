import { Globe } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '../Navigation/Navigation';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header--logo">
        <Link href="/" className="header--logo-link">
          <div className="header--logo-icon">
            <Globe width={30} height={30} />
          </div>

          <div className="header--logo-text">IP Tracker</div>
        </Link>
      </div>

      <Navigation />
    </header>
  );
};
