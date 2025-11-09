'use client';

import { useEffect, useRef, useState } from 'react';
import { googleAdsClientId } from '@/utils/utils';
import './AdSense.scss';

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
  const [isAdLoaded, setIsAdLoaded] = useState(false);

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

          // Hide skeleton after ad loads (with a small delay to ensure ad renders)
          setTimeout(() => setIsAdLoaded(true), 1000);
        }
      } catch (err) {
        console.error('AdSense loading error:', err);
        // Hide skeleton even on error to prevent infinite loading
        setIsAdLoaded(true);
      }
    };

    // Wait for script to load and DOM to be ready
    const timer = setInterval(loadAd, 500);

    return () => {
      clearInterval(timer);
      // Reset on cleanup to allow re-initialization if component remounts
      isLoadedRef.current = false;
      setIsAdLoaded(false);
    };
  }, [adSlot]); // Re-run if adSlot changes

  // Show placeholder in development
  if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') {
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
            color: '#6b7280',
            fontSize: '14px',
            fontFamily: 'monospace',
            flexDirection: 'column',
            gap: '8px',
            height: '100%',
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
    <div className={`ad-container ${className}`} style={style}>
      {/* Skeleton loader - show while ad is loading */}
      {!isAdLoaded && (
        <div className="ad-skeleton">
          <div className="ad-skeleton__shimmer"></div>
        </div>
      )}

      {/* Actual AdSense ad - wrapper enforces height */}
      <div className="ad-wrapper">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{
            display: 'block',
            opacity: isAdLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
          data-ad-client={googleAdsClientId}
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-full-width-responsive={fullWidthResponsive}
        ></ins>
      </div>
    </div>
  );
};
