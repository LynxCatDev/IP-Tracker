import { Metadata } from 'next';
import { CircleQuestionMark } from 'lucide-react';
import { FAQ, PageInfo } from '@/components';

// Static generation with hourly revalidation
export const dynamic = 'force-static';
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description:
    'Find answers to common questions about IP addresses, privacy, security, geolocation, and using IP Tracker services.',
  keywords: [
    'ip address faq',
    'frequently asked questions',
    'ip tracker help',
    'privacy questions',
    'geolocation faq',
  ],
  openGraph: {
    title: 'FAQ - Frequently Asked Questions',
    description:
      'Everything you need to know about IP addresses, privacy, and security.',
  },
};

export default function FAQPage() {
  return (
    <div className="faq-page">
      <PageInfo
        title="Frequently Asked Questions"
        description="Everything you need to know about IP addresses, privacy, and security"
        icon={<CircleQuestionMark size={32} />}
      />

      <FAQ />
    </div>
  );
}
