import { Clock, Globe, Users, Zap } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  iconColor: string;
}

export const statsData: StatItem[] = [
  {
    icon: <Users size={24} />,
    value: '100K+',
    label: 'Users Worldwide',
    iconColor: '#8b5cf6',
  },
  {
    icon: <Globe size={24} />,
    value: '195+',
    label: 'Countries Covered',
    iconColor: '#8b5cf6',
  },
  {
    icon: <Clock size={24} />,
    value: '99.9%',
    label: 'Uptime',
    iconColor: '#8b5cf6',
  },
  {
    icon: <Zap size={24} />,
    value: '<100ms',
    label: 'Average Response',
    iconColor: '#8b5cf6',
  },
];
