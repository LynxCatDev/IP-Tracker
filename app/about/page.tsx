import { Target } from 'lucide-react';
import { PageInfo, TrustedStats } from '@/components';

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
    </div>
  );
}
