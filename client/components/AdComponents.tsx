'use client';

import AdSense from './AdSense';

export function BannerAd({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full flex justify-center my-6 ${className}`}>
      <AdSense
        adSlot="1234567890" // Replace with your actual ad slot ID
        adFormat="auto"
        className="max-w-4xl w-full"
        style={{ display: 'block', minHeight: '90px' }}
      />
    </div>
  );
}

export function SidebarAd({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      <AdSense
        adSlot="2345678901" // Replace with your actual ad slot ID
        adFormat="auto"
        style={{ display: 'block', minHeight: '250px' }}
      />
    </div>
  );
}

export function SquareAd({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <AdSense
        adSlot="3456789012" // Replace with your actual ad slot ID
        adFormat="auto"
        style={{ display: 'block', width: '300px', height: '250px' }}
      />
    </div>
  );
}

export function InArticleAd({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full my-8 ${className}`}>
      <div className="text-center text-xs text-gray-500 mb-2">
        Advertisement
      </div>
      <AdSense
        adSlot="4567890123" // Replace with your actual ad slot ID
        adFormat="fluid"
        style={{ display: 'block' }}
      />
    </div>
  );
}
