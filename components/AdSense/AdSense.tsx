'use client';

import { useEffect, useRef } from 'react';
import { googleAdsClientId } from '@/utils/utils';

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export const AdSense = ({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  style = { display: 'block' },
  className = '',
}: AdSenseProps) => {
  const adRef = useRef<HTMLModElement>(null);
  const isLoadedRef = useRef(false);

  useEffect(() => {
    const loadAd = () => {
      try {
        // Only proceed if we have the ad element and script is loaded
        if (
          adRef.current &&
          typeof window !== 'undefined' &&
          window.adsbygoogle
        ) {
          // Check if ad is already initialized to prevent duplicate ads
          if (isLoadedRef.current) {
            return;
          }

          // Push ad to queue for initialization
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          isLoadedRef.current = true;
        }
      } catch (err) {
        console.error('AdSense loading error:', err);
      }
    };

    // Wait for script to load and DOM to be ready
    const timer = setTimeout(loadAd, 500);

    return () => {
      clearTimeout(timer);
      // Reset on cleanup to allow re-initialization if component remounts
      isLoadedRef.current = false;
    };
  }, [adSlot]); // Re-run if adSlot changes

  // Show placeholder in development
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className={`ad-container ${className}`}>
        <div
          style={{
            ...style,
            backgroundColor: '#f3f4f6',
            border: '2px dashed #d1d5db',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100px',
            color: '#6b7280',
            fontSize: '14px',
            fontFamily: 'monospace',
            flexDirection: 'column',
            gap: '8px',
            borderRadius: '16px',
          }}
        >
          <div>🔧 AdSense Development</div>
          <div>Slot: {adSlot}</div>
          <div>Format: {adFormat}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style}
        data-ad-client={googleAdsClientId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      ></ins>
    </div>
  );
};
