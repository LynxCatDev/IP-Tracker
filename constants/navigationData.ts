export interface NavLink {
  href: string;
  label: string;
}

export const NAVIGATION_LINKS: Record<string, NavLink[]> = {
  header: [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  footer: [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
};
