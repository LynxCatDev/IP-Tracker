'use client';

import { AdSense } from './AdSense';

export const BannerAd = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`banner-ad ${className}`}>
      <AdSense
        adSlot="2886736646" // Real AdSense slot ID - Full Width Ad
        adFormat="auto"
        className=""
        style={{
          display: 'block',
          height: '90px',
          minHeight: '90px',
          maxHeight: '90px',
        }}
        fullWidthResponsive={true}
      />
    </div>
  );
};
