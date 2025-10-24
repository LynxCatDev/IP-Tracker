export interface SuggestionCardProps {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  severity?: 'high' | 'medium' | 'low' | 'very-high';
  iconColor?: string;
  iconBgColor?: string;
}
