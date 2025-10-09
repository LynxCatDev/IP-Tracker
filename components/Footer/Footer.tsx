import './Footer.scss';
import { FooterNavigation } from './FooterNavigation';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--container">
        <div className="footer--copyright">
          © {new Date().getFullYear()} IP Tracker. All rights reserved.
        </div>
        <div>
          <FooterNavigation />
        </div>
      </div>
    </footer>
  );
};
