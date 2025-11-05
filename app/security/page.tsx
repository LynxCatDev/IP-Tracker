import { Metadata } from 'next';
import { Shield, TriangleAlert } from 'lucide-react';
import {
  BestPractices,
  GeneralInfo,
  InfoCard,
  PageInfo,
  SuggestionsCards,
} from '@/components';
import {
  securityProtectionSuggestions,
  securitySuggestions,
} from '@/constants/suggestionsData';
import { securityGeneralCardInfo } from '@/constants/generalCardInfo';

export const metadata: Metadata = {
  title: 'Internet Security - Protect Against Hackers',
  description:
    'Learn how to protect yourself from hackers on public Wi-Fi and unsecured networks. Secure your connection and prevent unauthorized access.',
  keywords: [
    'internet security',
    'public wifi security',
    'protect from hackers',
    'network security',
    'secure connection',
  ],
  openGraph: {
    title: 'Internet Security - Protect Against Hackers',
    description:
      'Protect yourself from hackers on public Wi-Fi and other unsecured networks.',
  },
};

export default function SecurityPage() {
  return (
    <div className="security-page">
      <PageInfo
        title="Internet Security"
        description="Protect yourself from hackers on public Wi-Fi and other unsecured networks"
        icon={<Shield size={32} />}
      />

      <InfoCard
        title="Why Security Matters"
        description="Every time you connect to the internet, your IP address becomes visible to websites, services, and potentially malicious actors. On unsecured networks, especially public Wi-Fi, your data can be intercepted, monitored, or stolen. Protecting your connection and IP address is crucial for maintaining your digital security and preventing unauthorized access to your personal information."
        icon={<TriangleAlert size={24} />}
        backgroundColor="var(--icon-color-1)"
        iconBackgroundColor="var(--gradient-10)"
      />

      <SuggestionsCards
        headerTitle="Understanding the risks helps you protect yourself better"
        suggestionsList={securitySuggestions}
      />

      <SuggestionsCards
        headerTitle="Essential security measures to keep you safe online"
        suggestionsList={securityProtectionSuggestions}
        itemsPerColumn={3}
      />

      <GeneralInfo
        title="Security Best Practices"
        description={<BestPractices practicesData={securityGeneralCardInfo} />}
        color="var(--gradient-1)"
        icon={<Shield size={24} color="var(--icon-color-5)" />}
      />
    </div>
  );
}
