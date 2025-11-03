import { CircleCheck } from 'lucide-react';
import './BestPractices.scss';

interface BestPracticesProps {
  practicesData: string[];
  iconColor?: string;
  itemsPerColumn?: number;
}

export const BestPractices = ({
  practicesData,
  iconColor = 'var(--icon-color-5)',
  itemsPerColumn = 2,
}: BestPracticesProps) => {
  return (
    <div
      className="best-practices"
      style={{
        gridTemplateColumns: `repeat(${itemsPerColumn}, 1fr)`,
      }}
    >
      {practicesData.map((title, index) => (
        <div className="best-practices--item" key={index}>
          <div>
            <CircleCheck size={20} color={iconColor} />
          </div>
          <div>{title}</div>
        </div>
      ))}
    </div>
  );
};
