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
    const severity = suggestion.severity?.replace('protection-', '');

    const labels: Record<string, string> = {
      critical: 'Critical',
      'very-high': 'Very High',
      high: 'High',
      medium: 'Medium',
      low: 'Low',
    };

    return severity ? labels[severity] || null : null;
  };

  return (
    <div
      className="suggestions-card"
      style={{
        animationDelay: index ? `${index * 0.1}s` : '0s',
        padding: suggestion.bgColor && '16px',
        backgroundColor: suggestion.bgColor && suggestion.bgColor,
      }}
    >
      {suggestion.icon && (
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
          {suggestion.severity && !suggestion.bgColor && (
            <span
              className={`suggestions-card--severity suggestions-card--severity--${suggestion.severity}`}
            >
              {getSeverityLabel()}
            </span>
          )}
        </div>
      )}

      <div className="suggestions-card--content">
        <div className="suggestions-card--title">
          <h4>{suggestion.title}</h4>

          {suggestion.severity && suggestion.bgColor && (
            <span
              className={`suggestions-card--severity suggestions-card--severity--${suggestion.severity}`}
            >
              {getSeverityLabel()}
            </span>
          )}
        </div>
        <span className="suggestions-card--description">
          {suggestion.description}
        </span>
      </div>
    </div>
  );
};
