'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'error' | 'success';
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
      {loading ? (
        <div className="button__spinner"></div>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="button__icon button__icon--left">{icon}</span>
          )}
          <span className="button__text">{children}</span>
          {icon && iconPosition === 'right' && (
            <span className="button__icon button__icon--right">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};
