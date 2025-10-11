import React from 'react';
import { Mail } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

export const NAVIGATION_LINKS: Record<string, NavLink[]> = {
  header: [
    { href: '/about', label: 'About' },
    { href: '/contacts', label: 'Contacts', icon: <Mail size={16} /> },
  ],
  footer: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/support', label: 'Support' },
    { href: '/about', label: 'About' },
    { href: '/contacts', label: 'Contacts' },
  ],
};
