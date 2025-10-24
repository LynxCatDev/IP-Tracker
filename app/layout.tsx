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
  title: 'What Is My IP Address? - IP Tracker & Geolocation Tool',
  description:
    'Discover your public IP address and get detailed information about your internet connection, location, ISP, and more. Free IP lookup tool with accurate geolocation data.',
  keywords:
    'what is my ip address?, IP address, what is my ip, ip tracker, geolocation, ip lookup, internet service provider, ISP, location tracker',
  robots: 'index, follow',
  openGraph: {
    title: 'What Is My IP Address? - Free IP Tracker & Geolocation Tool',
    description:
      'Discover your public IP address and get detailed information about your internet connection, location, ISP, and more.',
    type: 'website',
    url: 'https://ip-tracker.vercel.app', // Your actual Vercel domain
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
