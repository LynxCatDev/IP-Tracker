import React from 'react';
import { CircleQuestionMark, Home, Info, Mail } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

export const NAVIGATION_LINKS: Record<string, NavLink[]> = {
  header: [
    { href: '/', label: 'Home', icon: <Home size={16} /> },
    { href: '/about', label: 'About', icon: <Info size={16} /> },
    { href: '/faq', label: 'FAQ', icon: <CircleQuestionMark size={16} /> },
    { href: '/contacts', label: 'Contacts', icon: <Mail size={16} /> },
  ],
  footer: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/support', label: 'Support' },
    { href: '/about', label: 'About' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contacts', label: 'Contacts' },
  ],
};
