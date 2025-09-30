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
    url: 'https://ip-tracker-m8nglocor-tudors-projects-d44aa39d.vercel.app', // Your actual Vercel domain
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
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🌐%3C/text%3E%3C/svg%3E"
          type="image/svg+xml"
        />
        <link
          rel="apple-touch-icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🌐%3C/text%3E%3C/svg%3E"
        />

        {/* Google AdSense - Load in all environments for verification */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2641120743401922"
          crossOrigin="anonymous"
        ></script>

        {/* AdSense site verification meta tag */}
        <meta name="google-adsense-account" content="ca-pub-2641120743401922" />

        {/* Google Analytics (optional but recommended for monetization) */}
        {process.env.NODE_ENV === 'production' && (
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
        )}
        {/* Replace GA_MEASUREMENT_ID with your actual Google Analytics ID */}

        <StructuredData />
      </head>
      <body className="">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
