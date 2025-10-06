'use client';

import { CSSProperties, ReactNode } from 'react';
import './DetailsCard.scss';

export interface DetailsCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  iconColor?: 'blue' | 'purple' | 'green' | 'orange';
}

const colorConfig = {
  blue: {
    gradient: '#a9daf9',
    hover: '#caedf9',
    icon: 'var(--icon-color-1)',
  },
  purple: {
    gradient: '#eabbee',
    hover: '#f1d6f2',
    icon: 'var(--icon-color-2)',
  },
  green: {
    gradient: '#9be3c7',
    hover: '#bee7dd',
    icon: 'var(--icon-color-3)',
  },
  orange: {
    gradient: '#fed7aa',
    hover: '#fbf2f0',
    icon: 'var(--icon-color-4)',
  },
};

export const DetailsCard = ({
  icon,
  title,
  value,
  iconColor = 'blue',
}: DetailsCardProps) => {
  return (
    <div
      className="details-card"
      style={
        {
          '--hover-color': colorConfig[iconColor].hover,
          '--icon-gradient': colorConfig[iconColor].gradient,
          '--icon-color': colorConfig[iconColor].icon,
        } as CSSProperties
      }
    >
      <div className={`details-card__icon`}>{icon}</div>
      <div className="details-card__content">
        <h3 className="details-card__title">{title}</h3>
        <p className="details-card__value">{value}</p>
      </div>
    </div>
  );
};
