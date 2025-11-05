import { Clock } from 'lucide-react';
import './PageInfo.scss';

interface PageInfoProps {
  type?: 'default' | 'colored';
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  time?: string;
}

export const PageInfo = ({
  title,
  description,
  icon,
  type = 'default',
  time,
}: PageInfoProps) => {
  return (
    <div className={`page-info page-info--${type}`}>
      {icon && <div className="page-info--icon">{icon}</div>}

      {title && (
        <div className="page-info--text">
          <h1>{title}</h1>

          {description && <span>{description}</span>}

          {time && (
            <span className="page-info--time">
              <Clock size={16} />
              {time}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
