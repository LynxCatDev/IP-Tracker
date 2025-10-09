import Link from 'next/link';
import './Navigation.scss';

interface Props {
  isFooter?: boolean;
}

export const Navigation = ({ isFooter }: Props) => {
  if (isFooter) {
    return (
      <nav className="footer--navigation">
        <Link href="/Privacy">Privacy Policy</Link>
        <Link href="/Terms">Terms of Service</Link>
        <Link href="/disclosure">Affiliate Disclosure</Link>
        <Link href="/About">About</Link>
        <Link href="/Contact">Contact</Link>
      </nav>
    );
  }

  return (
    <nav>
      <Link href="/About">About</Link>
      <Link href="/Contact">Contact</Link>
    </nav>
  );
};
