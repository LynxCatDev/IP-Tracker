import { Mail } from 'lucide-react';
import './contacts.scss';

export default function ContactsPage() {
  return (
    <div className="contacts-page">
      <div className="contacts-page--header">
        <div className="contacts-page--header-icon">
          <Mail size={32} />
        </div>

        <div className="contacts-page--header-text">
          <h3>Get in Touch</h3>
          <span>
            Have questions about IP tracking or need assistance? We're here to
            help!
          </span>
        </div>
      </div>
    </div>
  );
}
