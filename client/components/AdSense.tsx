'use client';

import { useEffect, useRef } from 'react';

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

export default function AdSense({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  style = { display: 'block' },
  className = '',
}: AdSenseProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isLoadedRef = useRef(false);

  useEffect(() => {
    // Only load ads in production or if not already loaded
    if (process.env.NODE_ENV === 'development' && isLoadedRef.current) {
      return;
    }

    const loadAd = () => {
      try {
        if (adRef.current && !isLoadedRef.current) {
          // Check if adsbygoogle script is loaded
          if (typeof window !== 'undefined' && window.adsbygoogle) {
            // Clear any existing content
            if (adRef.current.innerHTML.trim() !== '') {
              adRef.current.innerHTML = '';
            }

            window.adsbygoogle.push({});
            isLoadedRef.current = true;
          }
        }
      } catch (err) {
        // In development, we expect errors since we don't have real ad units
        if (process.env.NODE_ENV === 'development') {
          console.log(
            'AdSense (dev mode):',
            `Ad slot ${adSlot} - ads disabled in development`,
          );
        } else {
          console.error('AdSense error:', err);
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadAd, 100);

    return () => {
      clearTimeout(timer);
      isLoadedRef.current = false;
    };
  }, [adSlot]);

  // In development, show a placeholder
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
          }}
        >
          AdSense Placeholder
          <br />
          Slot: {adSlot}
          <br />
          Format: {adFormat}
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
        data-ad-client="ca-pub-2641120743401922"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      ></ins>
    </div>
  );
}
