'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationLinkProps {
  href: string;
  label: string;
  showActive?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export const NavigationLink = ({
  href,
  label,
  showActive = false,
  className = 'navigation--link',
  icon,
}: NavigationLinkProps) => {
  const pathname = usePathname();
  const isActive = showActive && pathname === href;

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? 'navigation--link--active' : ''}`}
    >
      {icon && <span className="navigation--link--icon">{icon}</span>}
      {label}
    </Link>
  );
};
