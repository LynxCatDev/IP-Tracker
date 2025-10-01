import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'What Is My IP Address? - IP Tracker & Geolocation Tool',
  description:
    'Discover your public IP address and get detailed information about your internet connection, location, ISP, and more. Free IP lookup tool with accurate geolocation data.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
