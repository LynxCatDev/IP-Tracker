import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'What Is My IP Address? - IP Tracker & Geolocation Tool',
  description:
    'Discover your public IP address and get detailed information about your internet connection, location, ISP, and more. Free IP lookup tool with accurate geolocation data.',
  keywords:
    'IP address, what is my ip, ip tracker, geolocation, ip lookup, internet service provider, ISP, location tracker',
  robots: 'index, follow',
  openGraph: {
    title: 'What Is My IP Address? - Free IP Tracker & Geolocation Tool',
    description:
      'Discover your public IP address and get detailed information about your internet connection, location, ISP, and more.',
    type: 'website',
    url: 'https://yoursite.com', // Replace with your actual domain
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense - Only load in production */}
        {process.env.NODE_ENV === 'production' && (
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2641120743401922"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        {/* AdSense Publisher ID: ca-pub-2641120743401922 */}

        {/* Google Analytics (optional but recommended for monetization) */}
        {/* {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
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
        )} */}
        {/* Replace GA_MEASUREMENT_ID with your actual Google Analytics ID */}

        {/* <StructuredData /> */}
      </head>
      <body className="">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
