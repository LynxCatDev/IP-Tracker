import {
  Activity,
  Database,
  Eye,
  EyeOff,
  Globe,
  Shield,
  Target,
  UserX,
} from 'lucide-react';
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

export const privacyProtectionSuggestions: SuggestionCardProps[] = [
  {
    id: 1,
    title: 'Use a VPN Service',
    description:
      'A VPN encrypts your traffic and masks your real IP address, preventing ISPs, advertisers, and governments from tracking your activities.',
    severity: 'protection-very-high',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <Shield size={24} />,
  },
  {
    id: 2,
    title: 'Privacy-Focused Browsers',
    description:
      'Use browsers like Brave or Firefox with enhanced tracking protection to block trackers and prevent fingerprinting.',
    severity: 'protection-high',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <EyeOff size={24} />,
  },
  {
    id: 3,
    title: 'DNS Privacy',
    description:
      'Use encrypted DNS services (DNS over HTTPS) to prevent ISPs from seeing which websites you visit.',
    severity: 'protection-high',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <Globe size={24} />,
  },
  {
    id: 4,
    title: 'Disable Trackers',
    description:
      'Use browser extensions like Privacy Badger or uBlock Origin to block third-party trackers and ads.',
    severity: 'protection-medium',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <UserX size={24} />,
  },
  {
    id: 5,
    title: 'Regular Cookie Clearing',
    description:
      'Regularly clear cookies and browsing data to prevent long-term tracking across sessions.',
    severity: 'protection-medium',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <Activity size={24} />,
  },
];
