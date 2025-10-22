import { CircleAlert, Lock } from 'lucide-react';
import { InfoCard, PageInfo } from '@/components';

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
    </div>
  );
}
