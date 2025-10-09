import { memo } from 'react';
import Link from 'next/link';

export const HeaderNavigation = memo(() => {
  return (
    <nav className="header--navigation">
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
});
