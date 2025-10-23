import { CircleAlert, Eye } from 'lucide-react';
import { InfoCard, PageInfo, SecurityCard } from '@/components';

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
    </div>
  );
}
