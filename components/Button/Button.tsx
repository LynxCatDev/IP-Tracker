'use client';

import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'success'
    | 'search'
    | 'gradient'
    | 'icon'
    | 'link';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  loading = false,
  icon,
  iconPosition = 'left',
  disabled,
  href,
  className = '',
  ...props
}: ButtonProps) => {
  const buttonClasses = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    loading && 'button--loading',
    disabled && 'button--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (variant === 'link') {
    return (
      <Link
        href={href || '/'}
        className="button button--link"
        prefetch={false}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {loading ? <div className="button--spinner"></div> : children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} disabled={disabled || loading} {...props}>
      {loading ? <div className="button--spinner"></div> : children}
    </button>
  );
};
