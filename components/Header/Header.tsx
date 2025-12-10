import { Globe } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '../Navigation/Navigation';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { BetaTag } from '../BetaBadge/BetaBadge';
import { NAVIGATION_LINKS } from '@/constants/navigationData';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header--logo">
        <Link href="/" className="header--logo-link">
          <div className="header--logo-icon">
            {/* <Globe width={30} height={30} /> */}
            <img
              width={46}
              height={46}
              src="/tracker-favicon.png"
              alt="IP Trackers Logo"
            />
          </div>

          <div className="header--logo-text">
            IP Trackers
            <BetaTag />
          </div>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <Navigation
        links={NAVIGATION_LINKS.header}
        variant="header"
        showActiveStates={true}
      />

      {/* Mobile Menu */}
      <MobileMenu links={NAVIGATION_LINKS.header} />
    </header>
  );
};
