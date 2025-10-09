import { memo } from 'react';
import Link from 'next/link';

export const FooterNavigation = memo(() => {
  return (
    <nav className="footer--navigation">
      <Link href="/Privacy">Privacy Policy</Link>
      <Link href="/Terms">Terms of Service</Link>
      <Link href="/disclosure">Affiliate Disclosure</Link>
      <Link href="/About">About</Link>
      <Link href="/Contact">Contact</Link>
    </nav>
  );
});

FooterNavigation.displayName = 'FooterNavigation';
