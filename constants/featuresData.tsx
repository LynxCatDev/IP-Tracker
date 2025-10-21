import { Eye, Globe, Lock, Shield, TrendingUp, Zap } from "lucide-react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
}

export const featuresData: FeatureItem[] = [
  {
    icon: <Zap size={24} />,
    title: 'Instant Detection',
    description:
      'Get your IP address and location information instantly with our lightning-fast detection system.',
    iconBgColor: '#fef3c7',
    iconColor: '#f59e0b',
  },
  {
    icon: <Shield size={24} />,
    title: 'Privacy Focused',
    description:
      "We don't store or track your IP information. All lookups are processed securely and anonymously.",
    iconBgColor: '#dbeafe',
    iconColor: '#3b82f6',
  },
  {
    icon: <Globe size={24} />,
    title: 'Global Coverage',
    description:
      'Access detailed geolocation data for IP addresses from anywhere in the world.',
    iconBgColor: '#d1fae5',
    iconColor: '#10b981',
  },
  {
    icon: <Lock size={24} />,
    title: 'Secure Connection',
    description:
      'All data transmission is encrypted and secure, protecting your privacy at all times.',
    iconBgColor: '#e9d5ff',
    iconColor: '#a855f7',
  },
  {
    icon: <Eye size={24} />,
    title: 'Detailed Information',
    description:
      'Get comprehensive details including ISP, timezone, coordinates, and network information.',
    iconBgColor: '#cffafe',
    iconColor: '#06b6d4',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Always Updated',
    description:
      'Our IP database is continuously updated to provide the most accurate information available.',
    iconBgColor: '#fce7f3',
    iconColor: '#ec4899',
  },
];
