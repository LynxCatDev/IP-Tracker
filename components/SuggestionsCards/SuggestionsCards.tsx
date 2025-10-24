import { SuggestionCardProps } from '@/types/suggestionsData.interface';
import { SuggestionsCardsItem } from './SuggestionCardsItem';
import './SuggestionsCards.scss';

interface SuggestionsCardsProps {
  headerTitle?: string;
  suggestionsList?: SuggestionCardProps[];
}

export const SuggestionsCards = ({
  headerTitle,
  suggestionsList,
}: SuggestionsCardsProps) => {
  return (
    <div className="suggestions-cards">
      <h3>{headerTitle}</h3>
      <div className="suggestions-list">
        {suggestionsList?.map((suggestion) => (
          <SuggestionsCardsItem key={suggestion.id} suggestion={suggestion} />
        ))}
      </div>
    </div>
  );
};
