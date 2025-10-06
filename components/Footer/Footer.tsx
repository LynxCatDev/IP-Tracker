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
          <Navigation />
        </div>
      </div>
    </footer>
  );
};
