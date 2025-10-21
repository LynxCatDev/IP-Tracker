import Link from 'next/link';
import { ITargetCard } from '@/types/targetCard.interface';
import { Button } from '../Button/Button';

interface Props {
  targetCard: ITargetCard;
}

export const TargetCardsItem = ({ targetCard }: Props) => {
  return (
    <Link
      href={targetCard.link || ''}
      key={targetCard.id}
      className="target-cards--item"
      style={{
        animationDelay: `${targetCard.id * 0.2}s`,
      }}
    >
      <div
        className="target-cards--item-icon"
        style={{
          background: targetCard.gradient,
        }}
      >
        {targetCard.icon}
      </div>

      <div className="target-cards--item-title">{targetCard.title}</div>

      <div className="target-cards--item-description">
        {targetCard.description}
      </div>

      <Button
        className="target-cards--item-button"
        style={
          {
            '--gradient': targetCard.gradient,
          } as React.CSSProperties
        }
      >
        I want {targetCard.title.toLowerCase()}
      </Button>
    </Link>
  );
};
