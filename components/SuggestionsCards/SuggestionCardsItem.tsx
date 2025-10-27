import { SuggestionCardProps } from '@/types/suggestionsData.interface';

interface SuggestionsCardsItemProps {
  suggestion: SuggestionCardProps;
  index?: number;
}

export const SuggestionsCardsItem = ({
  suggestion,
  index,
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
      case 'protection-very-high':
        return 'Very High';
      case 'protection-high':
        return 'High';
      case 'protection-medium':
        return 'Medium';
      case 'protection-low':
        return 'Low';
      default:
        return null;
    }
  };

  return (
    <div
      className="suggestions-card"
      style={{
        animationDelay: index ? `${index * 0.1}s` : '0s',
      }}
    >
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
