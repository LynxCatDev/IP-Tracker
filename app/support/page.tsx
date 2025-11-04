import { Headphones } from 'lucide-react';
import { ContactForm, PageInfo, SuggestionsCards } from '@/components';
import { supportSuggestions } from '@/constants/suggestionsData';

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

      <ContactForm style={{ marginTop: '32px' }} />
    </div>
  );
}
