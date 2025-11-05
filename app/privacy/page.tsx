import { Metadata } from 'next';
import { CircleAlert, CircleCheck, Eye, EyeOff } from 'lucide-react';
import {
  BestPractices,
  GeneralInfo,
  InfoCard,
  PageInfo,
  SuggestionsCards,
} from '@/components';
import {
  privacyProtectionSuggestions,
  privacySuggestions,
} from '@/constants/suggestionsData';
import { privacyGeneralCardInfo } from '@/constants/generalCardInfo';

export const metadata: Metadata = {
  title: 'Privacy Policy - Internet Privacy & Tracking',
  description:
    'Understand how IP Tracker protects your privacy and learn methods to prevent tracking by governments, ISPs, and advertisers.',
  keywords: [
    'privacy policy',
    'internet privacy',
    'prevent tracking',
    'online privacy',
    'isp tracking',
    'advertiser tracking',
  ],
  openGraph: {
    title: 'Privacy Policy - Internet Privacy & Tracking',
    description:
      'Learn how we protect your privacy and methods to prevent online tracking.',
  },
};

export default function PrivacyPage() {
  return (
    <div className="privacy-page">
      <PageInfo
        title="Internet Privacy"
        description="Prevent your government, ISP, and advertisers from tracking your online activities"
        icon={<Eye size={32} />}
      />

      <InfoCard
        title="Your Privacy is at Risk"
        description="Every website you visit, every search you make, and every link you click can be tracked and logged. Your IP address acts as a unique identifier that allows ISPs, advertisers, and governments to monitor your online behavior, build detailed profiles, and potentially sell your data to third parties. Taking control of your privacy is essential in today's digital world."
        icon={<CircleAlert size={24} />}
        backgroundColor="var(--icon-color-5)"
        iconBackgroundColor="var(--gradient-1)"
      />

      <SuggestionsCards
        headerTitle="Who's tracking you and how they're doing it"
        suggestionsList={privacySuggestions}
      />

      <SuggestionsCards
        headerTitle="Effective methods to reclaim your online privacy"
        suggestionsList={privacyProtectionSuggestions}
        itemsPerColumn={3}
      />

      <GeneralInfo
        title="Privacy Tips & Best Practices"
        description={<BestPractices practicesData={privacyGeneralCardInfo} />}
        color="var(--gradient-1)"
        icon={<EyeOff size={24} color="var(--icon-color-5)" />}
      />
    </div>
  );
}
