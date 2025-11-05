import { Metadata } from 'next';
import { CircleAlert, Key, Lock, LockOpen } from 'lucide-react';
import {
  BestPractices,
  GeneralInfo,
  InfoCard,
  PageInfo,
  SuggestionsCards,
} from '@/components';
import {
  accessProtectionSuggestions,
  accessStreamingSuggestions,
  accessSuggestions,
} from '@/constants/suggestionsData';
import { accessGeneralCardInfo } from '@/constants/generalCardInfo';

export const metadata: Metadata = {
  title: 'Internet Access Freedom - Bypass Geo-Restrictions',
  description:
    'Access Netflix, Hulu, and streaming services without geographic restrictions. Learn how to bypass geo-blocking and access unrestricted content.',
  keywords: [
    'bypass geo restrictions',
    'access netflix',
    'streaming without restrictions',
    'geo blocking',
    'vpn streaming',
  ],
  openGraph: {
    title: 'Internet Access Freedom - Bypass Geo-Restrictions',
    description: 'Access streaming services without geographic restrictions.',
  },
};

export default function AccessPage() {
  return (
    <div className="access-page">
      <PageInfo
        title="Internet Access Freedom"
        description="Access Netflix, Hulu, and other streaming services without geographic restrictions"
        icon={<Lock size={32} />}
      />

      <InfoCard
        title="Breaking Down Digital Borders"
        description="Your IP address determines what content you can access online. Streaming services, websites, and platforms use geo-blocking to restrict content based on your location. This means you might miss out on your favorite shows, movies, or services simply because of where you're located. By masking your IP address, you can bypass these restrictions and access the full, unrestricted internet."
        icon={<CircleAlert size={24} />}
        backgroundColor="var(--gradient-11)"
        iconBackgroundColor="var(--gradient-12)"
      />

      <SuggestionsCards
        headerTitle="How your location limits what you can access"
        suggestionsList={accessSuggestions}
      />

      <SuggestionsCards
        headerTitle="Methods to access geo-blocked content"
        suggestionsList={accessProtectionSuggestions}
      />

      <GeneralInfo
        title="Essential VPN Features for Streaming"
        description={
          <SuggestionsCards
            suggestionsList={accessStreamingSuggestions}
            itemsPerColumn={3}
            styles={{ margin: '0' }}
          />
        }
        color="var(--gradient-3)"
        icon={<Key size={24} color="var(--icon-color-3)" />}
      />

      <GeneralInfo
        title="Privacy Tips & Best Practices"
        description={
          <BestPractices
            practicesData={accessGeneralCardInfo}
            iconColor="var(--gradient-11)"
          />
        }
        color="var(--gradient-3)"
        icon={<LockOpen size={24} color="var(--icon-color-3)" />}
      />
    </div>
  );
}
