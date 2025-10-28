export interface SuggestionCardProps {
  id: number;
  icon?: React.ReactNode;
  title: string;
  description: string;
  severity?:
    | 'high'
    | 'medium'
    | 'low'
    | 'very-high'
    | 'protection-very-high'
    | 'protection-high'
    | 'protection-medium'
    | 'protection-low'
    | 'critical';
  iconColor?: string;
  iconBgColor?: string;
  bgColor?: string;
}
