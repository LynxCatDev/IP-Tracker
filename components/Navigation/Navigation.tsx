'use client';

import { NavigationLink } from './NavigationLink';
import type { NavLink } from '@/constants/navigationData';
import './Navigation.scss';

interface NavigationProps {
  links: NavLink[];
  variant: 'header' | 'footer';
  showActiveStates?: boolean;
  className?: string;
}

export const Navigation = ({
  links,
  variant,
  showActiveStates = false,
  className = '',
}: NavigationProps) => {
  return (
    <nav className={`navigation navigation--${variant} ${className}`}>
      {links.map((link) => (
        <NavigationLink
          key={link.href}
          href={link.href}
          label={link.label}
          showActive={showActiveStates}
        />
      ))}
    </nav>
  );
};
