import { Metadata } from 'next';
import { Headphones } from 'lucide-react';
import { ContactForm, PageInfo, SuggestionsCards } from '@/components';
import { supportSuggestions } from '@/constants/suggestionsData';

export const metadata: Metadata = {
  title: 'Support Center - Get Help',
  description:
    "Access our support center for help with IP tracking, common issues, and technical assistance. We're here to help when you need it.",
  keywords: [
    'support center',
    'technical support',
    'help desk',
    'customer support',
    'troubleshooting',
  ],
  openGraph: {
    title: 'Support Center - Get Help',
    description:
      'Get the support you need for IP tracking and technical assistance.',
  },
};

export default function SupportPage() {
  return (
    <div className="support-page">
      <PageInfo
        title="Support Center"
        description="We're here to help! Get the support you need, when you need it."
        icon={<Headphones size={32} />}
      />

      <SuggestionsCards
        headerTitle="Common Issues & Solutions"
        suggestionsList={supportSuggestions}
      />

      <ContactForm
        style={{ marginTop: '32px' }}
        buttonTitle="Submit Support Request"
      />
    </div>
  );
}
