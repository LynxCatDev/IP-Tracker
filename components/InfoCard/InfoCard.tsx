import './InfoCard.scss';

interface InfoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  backgroundColor?: string;
  iconBackgroundColor?: string;
}

export const InfoCard = ({
  title,
  description,
  icon,
  backgroundColor,
  iconBackgroundColor,
}: InfoCardProps) => {
  return (
    <div className="info-card" style={{ backgroundColor }}>
      <div
        className="info-card--icon"
        style={{ backgroundColor: iconBackgroundColor }}
      >
        {icon}
      </div>

      <div className="info-card--content">
        <h2>{title}</h2>
        <div className="info-card--description">
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};
