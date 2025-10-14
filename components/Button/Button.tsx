'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
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
    | 'icon';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  loading = false,
  icon,
  iconPosition = 'left',
  disabled,
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

  return (
    <button className={buttonClasses} disabled={disabled || loading} {...props}>
      {loading ? <div className="button--spinner"></div> : children}
    </button>
  );
};
