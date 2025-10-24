import { Database, Eye, Globe, Target } from 'lucide-react';
import { SuggestionCardProps } from '@/types/suggestionsData.interface';

export const privacySuggestions: SuggestionCardProps[] = [
  {
    id: 1,
    title: 'ISP Tracking',
    description:
      'Your Internet Service Provider can see and log every website you visit, creating a detailed profile of your online behavior.',
    severity: 'high',
    iconColor: 'var(--gradient-1)',
    iconBgColor: 'var(--icon-color-5)',
    icon: <Eye size={24} />,
  },
  {
    id: 2,
    title: 'Targeted Advertising',
    description:
      'Advertisers track your IP address to build profiles and serve personalized ads based on your browsing history.',
    severity: 'high',
    iconColor: 'var(--gradient-1)',
    iconBgColor: 'var(--icon-color-5)',
    icon: <Target size={24} />,
  },
  {
    id: 3,
    title: 'Government Surveillance',
    description:
      'In many countries, governments can request or access your browsing data from ISPs without your knowledge.',
    severity: 'high',
    iconColor: 'var(--gradient-1)',
    iconBgColor: 'var(--icon-color-5)',
    icon: <Globe size={24} />,
  },
  {
    id: 4,
    title: 'Data Collection',
    description:
      'Websites and services collect your IP address and associate it with your activities, building extensive user profiles.',
    severity: 'medium',
    iconColor: 'var(--gradient-1)',
    iconBgColor: 'var(--icon-color-5)',
    icon: <Database size={24} />,
  },
];
