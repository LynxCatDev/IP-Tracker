import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { ContactForm } from '@/components';
import './contacts.scss';

export default function ContactsPage() {
  return (
    <div className="contacts-page">
      <div className="contacts-page--header">
        <div className="contacts-page--header-icon">
          <Mail size={32} />
        </div>

        <div className="contacts-page--header-text">
          <h1>Get in Touch</h1>
          <span>
            Have questions about IP tracking or need assistance? We're here to
            help!
          </span>
        </div>
      </div>

      <div className="contacts-page--methods">
        <div className="contacts-page--info">
          <div className="contacts-page--info-details">
            <h3>Contact Information</h3>

            <div className="contacts-page--info-item">
              <div className="contacts-page--info-icon contacts-email">
                <Mail size={20} color="var(--icon-color-1)" />
              </div>

              <div>
                <div className="contacts-page--info-title">Email</div>
                <div className="contacts-page--info-content">
                  support@iptracker.com
                </div>
              </div>
            </div>

            <div className="contacts-page--info-item">
              <div className="contacts-page--info-icon contacts-phone">
                <Phone size={20} color="var(--icon-color-2)" />
              </div>

              <div>
                <div className="contacts-page--info-title">Phone</div>
                <div className="contacts-page--info-content">
                  +1 (234) 567-8901
                </div>
              </div>
            </div>

            <div className="contacts-page--info-item">
              <div className="contacts-page--info-icon contacts-address">
                <MapPin size={20} color="var(--icon-color-3)" />
              </div>

              <div>
                <div className="contacts-page--info-title">Address</div>
                <div className="contacts-page--info-content">
                  123 Main St, Anytown, USA
                </div>
              </div>
            </div>
          </div>

          <div className="contacts-page--working-hours">
            <div className="contacts-page--working-hours-info">
              <MessageSquare size={20} color="var(--icon-color-1)" />

              <h3>Business Hours</h3>
            </div>

            <div className="contacts-page--working-hours-content">
              <div className="contacts-page--working-hours-time">
                <span>Monday-Friday</span>
                <span>9:00 AM-6:00 PM(EEST)</span>
              </div>

              <div className="contacts-page--working-hours-time">
                <span>Saturday-Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
