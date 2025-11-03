import { Headphones } from 'lucide-react';
import { PageInfo } from '@/components';

export default function SupportPage() {
  return (
    <div className="support-page">
      <PageInfo
        title="Support Center"
        description="We're here to help! Get the support you need, when you need it."
        icon={<Headphones size={32} />}
      />
    </div>
  );
}
