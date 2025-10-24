import { SuggestionCardProps } from '@/types/suggestionsData.interface';

interface SuggestionsCardsItemProps {
  suggestion: SuggestionCardProps;
}

export const SuggestionsCardsItem = ({
  suggestion,
}: SuggestionsCardsItemProps) => {
  const getSeverityLabel = () => {
    switch (suggestion.severity) {
      case 'very-high':
        return 'Very High Impact';
      case 'high':
        return 'High Impact';
      case 'medium':
        return 'Medium Impact';
      case 'low':
        return 'Low Impact';
      default:
        return null;
    }
  };

  return (
    <div className="suggestions-card">
      <div className="suggestions-card--header">
        <div
          className="suggestions-card--icon"
          style={{
            backgroundColor: suggestion.iconColor,
            color: suggestion.iconBgColor,
          }}
        >
          {suggestion.icon}
        </div>
        {suggestion.severity && (
          <span
            className={`suggestions-card--severity suggestions-card--severity--${suggestion.severity}`}
          >
            {getSeverityLabel()}
          </span>
        )}
      </div>

      <div className="suggestions-card--content">
        <h4 className="suggestions-card--title">{suggestion.title}</h4>
        <span className="suggestions-card--description">
          {suggestion.description}
        </span>
      </div>
    </div>
  );
};
