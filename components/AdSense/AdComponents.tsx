'use client';

import { AdSense } from './AdSense';

export const BannerAd = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`w-full flex justify-center my-6 ${className}`}>
      <AdSense
        adSlot="2886736646" // Real AdSense slot ID - Full Width Ad
        adFormat="auto"
        className="max-w-4xl w-full"
        style={{ display: 'block', minHeight: '90px' }}
        fullWidthResponsive={true}
      />
    </div>
  );
};
