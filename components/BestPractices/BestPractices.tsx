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
}: BestPracticesProps) => {
  return (
    <div className="best-practices">
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
