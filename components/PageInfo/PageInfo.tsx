import './PageInfo.scss';

interface PageInfoProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export const PageInfo = ({ title, description, icon }: PageInfoProps) => {
  return (
    <div className="page-info">
      {icon && <div className="page-info--icon">{icon}</div>}

      {title && (
        <div className="page-info--text">
          <h1>{title}</h1>
          {description && <span>{description}</span>}
        </div>
      )}
    </div>
  );
};
