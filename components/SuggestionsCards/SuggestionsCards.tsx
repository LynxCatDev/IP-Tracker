import { SuggestionCardProps } from '@/types/suggestionsData.interface';
import { SuggestionsCardsItem } from './SuggestionCardsItem';
import './SuggestionsCards.scss';

interface SuggestionsCardsProps {
  headerTitle?: string;
  suggestionsList?: SuggestionCardProps[];
  itemsPerColumn?: number;
  styles?: React.CSSProperties;
}

export const SuggestionsCards = ({
  headerTitle,
  suggestionsList,
  itemsPerColumn = 2,
  styles,
}: SuggestionsCardsProps) => {
  return (
    <div className="suggestions-cards" style={{ ...styles }}>
      {headerTitle && <h3>{headerTitle}</h3>}

      <div
        className={`suggestions-list suggestions-list--cols-${itemsPerColumn}`}
      >
        {suggestionsList?.map((suggestion, index) => (
          <SuggestionsCardsItem
            key={suggestion.id}
            suggestion={suggestion}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
