'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavLink } from '@/constants/navigationData';
import './MobileMenu.scss';

interface MobileMenuProps {
  links: NavLink[];
}

export const MobileMenu = ({ links }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="mobile-menu">
      <button
        className="mobile-menu__toggle"
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Backdrop */}
      <div
        className={`mobile-menu__backdrop ${
          isOpen ? 'mobile-menu__backdrop--visible' : ''
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-out menu */}
      <nav
        className={`mobile-menu__nav ${isOpen ? 'mobile-menu__nav--open' : ''}`}
      >
        <div className="mobile-menu__header">
          <span className="mobile-menu__title">Menu</span>
          <button
            className="mobile-menu__close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-menu__links">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`mobile-menu__link ${
                  isActive(link.href) ? 'mobile-menu__link--active' : ''
                }`}
                onClick={() => setIsOpen(false)}
                prefetch={false}
              >
                {link.icon && (
                  <span className="mobile-menu__link-icon">{link.icon}</span>
                )}
                <span className="mobile-menu__link-label">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
