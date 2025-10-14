import { CircleQuestionMark } from 'lucide-react';
import { FAQ, PageInfo } from '@/components';

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
