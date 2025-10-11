export interface NavLink {
  href: string;
  label: string;
}

export const NAVIGATION_LINKS: Record<string, NavLink[]> = {
  header: [
    { href: '/about', label: 'About' },
    { href: '/contacts', label: 'Contacts' },
  ],
  footer: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/support', label: 'Support' },
    { href: '/about', label: 'About' },
    { href: '/contacts', label: 'Contacts' },
  ],
};
