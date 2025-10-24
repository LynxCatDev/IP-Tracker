import { Info, Target } from 'lucide-react';
import {
  Features,
  GeneralInfo,
  PageInfo,
  TargetCards,
  TrustedStats,
} from '@/components';
import { aboutGeneralCardInfo } from '@/constants/generalCardInfo';

export default function AboutPage() {
  return (
    <div className="about-page">
      <PageInfo
        title="Our Mission"
        description="To provide fast, accurate, and privacy-focused IP address information to users worldwide. We believe in transparency, security, and making complex network information accessible to everyone."
        icon={<Target size={32} />}
        type="colored"
      />

      <TrustedStats />

      <Features />

      <TargetCards title="Our Core Values" />

      <GeneralInfo
        title="What We Do"
        description={
          <>
            {aboutGeneralCardInfo.map((title, index) => (
              <p key={index}>{title}</p>
            ))}
          </>
        }
        link="/"
        color="var(--gradient-2)"
        icon={<Info size={24} color="var(--icon-color-2)" />}
      />
    </div>
  );
}
