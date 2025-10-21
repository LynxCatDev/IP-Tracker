import { targetsData } from '@/constants/targetsData';
import { TargetCardsItem } from './TargetCardsItem';
import './TargetCards.scss';

interface TargetCardsProps {
  title?: string;
}

export const TargetCards = ({ title }: TargetCardsProps) => {
  return (
    <div className="target-cards">
      <div className="target-cards--header">
        <h3>{title}</h3>
      </div>
      <div className="target-cards--list">
        {targetsData.map((target) => (
          <TargetCardsItem key={target.id} targetCard={target} />
        ))}
      </div>
    </div>
  );
};
