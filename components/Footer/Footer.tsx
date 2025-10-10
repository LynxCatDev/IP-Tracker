import { NAVIGATION_LINKS } from '@/constants/navigationData';
import { Navigation } from '../Navigation/Navigation';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--container">
        <div className="footer--copyright">
          © {new Date().getFullYear()} IP Tracker. All rights reserved.
        </div>
        <div>
          <Navigation
            links={NAVIGATION_LINKS.footer}
            variant="footer"
            showActiveStates={false}
          />
        </div>
      </div>
    </footer>
  );
};
