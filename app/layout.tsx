import type { Metadata } from 'next';
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import { Montserrat } from 'next/font/google';
import { Footer, Header, LayoutWrapper } from '@/components';
import { googleAdsClientId } from '@/utils/utils';
import './globals.scss';

const montserratAlternates = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat-alternates',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ip-trackers.com'),
  title: {
    default: 'What Is My IP Address? - Free IP Trackers & Geolocation Tool',
    template: '%s | IP Trackers',
  },
  description:
    'Discover your public IP address instantly. Get detailed geolocation data, ISP information, and network details. Free, fast, and accurate IP lookup tool with privacy protection tips.',
  keywords: [
    'what is my ip',
    'my ip address',
    'ip tracker',
    'ip lookup',
    'geolocation',
    'find my ip',
    'check ip address',
    'internet service provider',
    'ISP lookup',
    'ip location',
    'ipv4',
    'ipv6',
    'internet privacy',
    'hide ip address',
  ],
  authors: [{ name: 'IP Trackers' }],
  creator: 'Tudor Uzun',
  publisher: 'IP Trackers',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ip-trackers.com',
    title: 'What Is My IP Address? - Free IP Trackers & Geolocation Tool',
    description:
      'Discover your public IP address instantly. Get detailed geolocation data, ISP information, and network details.',
    siteName: 'IP Trackers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is My IP Address? - Free IP Trackers',
    description:
      'Discover your public IP address instantly with detailed geolocation and ISP information.',
  },
  alternates: {
    canonical: 'https://ip-trackers.com',
  },
  verification: {
    google: googleAdsClientId,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserratAlternates.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Google AdSense - Load in all environments for verification */}
        {process.env.NEXT_PUBLIC_NODE_ENV === 'production' && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleAdsClientId}`}
            crossOrigin="anonymous"
          ></script>
        )}

        {/* AdSense site verification meta tag */}
        <meta name="google-adsense-account" content={googleAdsClientId} />

        {/* Google Analytics (optional but recommended for monetization) */}
        {process.env.NEXT_PUBLIC_NODE_ENV === 'production' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsClientId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GA_MEASUREMENT_ID');
              `}
            </Script>
          </>
        )}
      </head>
      <body
      // className={montserratAlternates.className}
      >
        <Header />
        <LayoutWrapper>{children}</LayoutWrapper>
        <Footer />

        {/* Add ToastContainer for react-toastify */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
