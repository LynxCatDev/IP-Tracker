import Link from 'next/link';
import './Navigation.scss';

export const Navigation = () => {
  return (
    <nav>
      <Link href="/About">About</Link>
      <Link href="/Contact">Privacy</Link>
    </nav>
  );
};
