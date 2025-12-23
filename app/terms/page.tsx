import { Metadata } from 'next';
import { CircleAlert, FileText, Info } from 'lucide-react';
import { BestPractices, GeneralInfo, InfoCard, PageInfo } from '@/components';
import { termsGeneralCardInfo } from '@/constants/generalCardInfo';

// Static generation with hourly revalidation
export const dynamic = 'force-static';
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the Terms of Service for IP Tracker. Learn about acceptable use, service limitations, and our legal obligations to users.',
  keywords: [
    'terms of service',
    'user agreement',
    'legal terms',
    'service terms',
    'acceptable use',
  ],
  openGraph: {
    title: 'Terms of Service - IP Tracker',
    description: 'Legal terms and conditions for using IP Tracker services.',
  },
};

export default function TermsPage() {
  return (
    <div className="terms-page">
      <PageInfo
        title="Terms of Service"
        description="Please read these terms carefully before using IP Tracker."
        icon={<FileText size={32} />}
        time="Last updated: November 1, 2025"
      />

      <InfoCard
        title="Important Notice"
        description="By using IP Tracker, you agree to these Terms of Service. These terms constitute a legally binding agreement between you and IP Tracker. Please read them carefully and contact us if you have any questions."
        icon={<CircleAlert size={24} color="var(--gradient-17)" />}
        backgroundColor="var(--gradient-4)"
        iconBackgroundColor="var(--gradient-16)"
        textColor="var(--gradient-17)"
      />

      <div>
        {termsGeneralCardInfo.map((term) => (
          <GeneralInfo
            key={term.id}
            title={term.title}
            description={
              <BestPractices
                practicesData={term.content}
                itemsPerColumn={1}
                iconColor="var(--icon-color-2)"
              />
            }
            color="var(--hover-color-2)"
            icon={term.icon}
          />
        ))}
      </div>

      <div>
        <GeneralInfo
          title="Questions About Our Terms?"
          description={
            <span>
              If you have any questions or concerns about these Terms of
              Service, please don't hesitate to contact us.
            </span>
          }
          link="/contacts"
          linkTitle="Contact Us"
          color="var(--gradient-2)"
          icon={<Info size={24} color="var(--icon-color-2)" />}
        />
      </div>
    </div>
  );
}
