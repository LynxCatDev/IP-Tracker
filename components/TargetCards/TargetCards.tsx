import { useMemo } from 'react';
import { TARGETS_DATA } from '@/constants/targetsData';
import { TargetCardsItem } from './TargetCardsItem';
import './TargetCards.scss';

export const TargetCards = () => {
  const targetsData = useMemo(() => TARGETS_DATA, [TARGETS_DATA]);
  return (
    <div className="target-cards">
      <div className="target-cards--header">
        <h3>Which is your biggest concern about using the Internet?</h3>
      </div>
      <div className="target-cards--list">
        {targetsData.map((target) => (
          <TargetCardsItem key={target.id} targetCard={target} />
        ))}
      </div>
    </div>
  );
};
