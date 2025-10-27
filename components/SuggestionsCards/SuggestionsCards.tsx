import { SuggestionCardProps } from '@/types/suggestionsData.interface';
import { SuggestionsCardsItem } from './SuggestionCardsItem';
import './SuggestionsCards.scss';

interface SuggestionsCardsProps {
  headerTitle?: string;
  suggestionsList?: SuggestionCardProps[];
  itemsPerColumn?: number;
}

export const SuggestionsCards = ({
  headerTitle,
  suggestionsList,
  itemsPerColumn = 2,
}: SuggestionsCardsProps) => {
  return (
    <div className="suggestions-cards">
      <h3>{headerTitle}</h3>
      <div
        className="suggestions-list"
        style={{
          gridTemplateColumns: `repeat(${itemsPerColumn}, 1fr)`,
        }}
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
