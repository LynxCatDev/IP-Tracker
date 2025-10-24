import { Info } from 'lucide-react';
import { Button } from '../Button/Button';
import './GeneralInfo.scss';
import React from 'react';

interface GeneralInfoProps {
  title: string;
  description: string | React.ReactNode;
  icon?: React.ReactNode;
  color?: string;
  link?: string;
}

export const GeneralInfo = ({
  title,
  description,
  icon,
  color,
  link,
}: GeneralInfoProps) => {
  return (
    <div className="general-info">
      <div className="general-info--content">
        {icon && (
          <div
            className="general-info--icon"
            style={{
              backgroundColor: color,
            }}
          >
            {icon}
          </div>
        )}
        <h2>{title}</h2>
      </div>

      <div className="general-info--description">{description}</div>

      {link && (
        <div className="general-info--action">
          <Button href={link} variant="link">
            Check Your IP Now
          </Button>
        </div>
      )}
    </div>
  );
};
