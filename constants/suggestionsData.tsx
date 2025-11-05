import {
  Activity,
  Ban,
  CircleAlert,
  CircleCheck,
  Clock,
  Database,
  Eye,
  EyeOff,
  FileCheck,
  FileQuestionMark,
  Globe,
  Key,
  Lock,
  MapPin,
  Search,
  Shield,
  ShieldAlert,
  Target,
  Tv,
  UserX,
  Wifi,
  WifiOff,
  Zap,
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
  {
    id: 6,
    title: 'Prevent WebRTC IP Leaks',
    description:
      'Disable WebRTC in your browser or use an extension (e.g., WebRTC Leak Prevent) so sites can’t discover your local IP via STUN requests.',
    severity: 'protection-high',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <WifiOff size={24} />,
  },
];

export const securitySuggestions: SuggestionCardProps[] = [
  {
    id: 1,
    title: 'Public Wi-Fi Risks',
    description:
      'Public networks are often unsecured, making your data vulnerable to interception by hackers.',
    severity: 'high',
    iconColor: 'var(--gradient-1)',
    iconBgColor: 'var(--icon-color-5)',
    icon: <Wifi size={24} />,
  },
  {
    id: 2,
    title: 'Man-in-the-Middle Attacks',
    description:
      'Attackers can intercept communication between you and websites, stealing sensitive information.',
    severity: 'high',
    iconColor: 'var(--gradient-1)',
    iconBgColor: 'var(--icon-color-5)',
    icon: <Eye size={24} />,
  },
  {
    id: 3,
    title: 'DDoS Attacks',
    description:
      'Your IP address can be targeted with distributed denial-of-service attacks.',
    severity: 'high',
    iconColor: 'var(--gradient-1)',
    iconBgColor: 'var(--icon-color-5)',
    icon: <ShieldAlert size={24} />,
  },
  {
    id: 4,
    title: 'IP Spoofing',
    description:
      'Malicious actors can mask their identity by faking IP addresses to launch attacks.',
    severity: 'medium',
    iconColor: 'var(--gradient-1)',
    iconBgColor: 'var(--icon-color-5)',
    icon: <Globe size={24} />,
  },
];

export const securityProtectionSuggestions: SuggestionCardProps[] = [
  {
    id: 1,
    title: 'Use a VPN',
    description:
      'A Virtual Private Network encrypts your internet connection and masks your real IP address, providing an extra layer of security on any network.',
    severity: 'protection-very-high',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <Lock size={24} />,
  },
  {
    id: 2,
    title: 'Enable Firewall',
    description:
      'Keep your firewall enabled to monitor and control incoming and outgoing network traffic based on security rules.',
    severity: 'protection-very-high',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <Shield size={24} />,
  },
  {
    id: 3,
    title: 'Use Strong Passwords',
    description:
      'Protect your network and devices with strong, unique passwords. Enable WPA3 encryption on your Wi-Fi router.',
    severity: 'protection-very-high',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <Key size={24} />,
  },
  {
    id: 4,
    title: 'Keep Software Updated',
    description:
      'Regular updates patch security vulnerabilities. Enable automatic updates for your operating system and applications.',
    severity: 'protection-medium',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <FileCheck size={24} />,
  },
  {
    id: 5,
    title: 'Use HTTPS',
    description:
      'Always look for HTTPS in website URLs. This ensures your data is encrypted in transit, even on public networks.',
    severity: 'protection-high',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <CircleCheck size={24} />,
  },
  {
    id: 6,
    title: 'Monitor Network Activity',
    description:
      'Regularly check connected devices and monitor unusual network activity that could indicate unauthorized access.',
    severity: 'protection-medium',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <Eye size={24} />,
  },
];

export const accessSuggestions: SuggestionCardProps[] = [
  {
    id: 1,
    title: 'Streaming Services',
    description:
      'Netflix, Hulu, Disney+, and other platforms restrict content based on your geographic location, blocking access to shows and movies.',
    severity: 'medium',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <Tv size={24} />,
  },
  {
    id: 2,
    title: 'Geo-Blocked Websites',
    description:
      'Many websites and services restrict access based on IP location, limiting content availability in certain regions.',
    severity: 'medium',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <Globe size={24} />,
  },
  {
    id: 3,
    title: 'Censorship',
    description:
      'Some governments block access to social media, news sites, and other platforms based on your IP address location.',
    severity: 'medium',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <Ban size={24} />,
  },
  {
    id: 4,
    title: 'Regional Pricing',
    description:
      'Online services and retailers often charge different prices based on your location, limiting access to better deals.',
    severity: 'medium',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <MapPin size={24} />,
  },
];

export const accessProtectionSuggestions: SuggestionCardProps[] = [
  {
    id: 1,
    title: 'VPN for Geo-Spoofing',
    description:
      'Connect to VPN servers in different countries to access region-locked content. Choose servers in the country whose content you want to access.',
    severity: 'protection-very-high',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <Lock size={24} />,
  },
  {
    id: 2,
    title: 'Smart DNS Services',
    description:
      "Smart DNS doesn't encrypt traffic but routes specific requests through different locations, ideal for streaming without speed loss.",
    severity: 'protection-high',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <Globe size={24} />,
  },
  {
    id: 3,
    title: 'Proxy Servers',
    description:
      'Use proxy servers to mask your IP and access blocked content, though less secure than VPNs.',
    severity: 'protection-medium',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <Lock size={24} />,
  },
  {
    id: 4,
    title: 'Browser Extensions',
    description:
      "Some browser extensions can help bypass simple geo-restrictions, though they're less reliable for streaming.",
    severity: 'protection-low',
    iconColor: 'var(--gradient-3)',
    iconBgColor: 'var(--icon-color-3)',
    icon: <Zap size={24} />,
  },
];

export const accessStreamingSuggestions: SuggestionCardProps[] = [
  {
    id: 1,
    title: 'Server Locations',
    description: 'More countries = more content access',
    severity: 'very-high',
    bgColor: 'var(--gradient-14)',
  },
  {
    id: 2,
    title: 'Connection Speed',
    description: 'Fast speeds needed for HD/4K streaming',
    severity: 'very-high',
    bgColor: 'var(--gradient-14)',
  },
  {
    id: 3,
    title: 'Unlimited Bandwidth',
    description: 'No data caps for uninterrupted streaming',
    severity: 'very-high',
    bgColor: 'var(--gradient-14)',
  },
  {
    id: 4,
    title: 'No-Logs Policy',
    description: 'Protects your privacy while accessing content',
    severity: 'high',
    bgColor: 'var(--gradient-14)',
  },
  {
    id: 5,
    title: 'Kill Switch',
    description: 'Prevents IP leaks if VPN disconnects',
    severity: 'medium',
    bgColor: 'var(--gradient-14)',
  },
  {
    id: 6,
    title: 'Multi-Device Support',
    description: 'Access content on all your devices',
    severity: 'medium',
    bgColor: 'var(--gradient-14)',
  },
];

export const supportSuggestions: SuggestionCardProps[] = [
  {
    id: 1,
    title: 'Having trouble looking up an IP address?',
    description:
      "Ensure you're entering a valid IPv4 address format (e.g., 192.168.1.1). Check your internet connection and try again.",
    iconColor: 'var(--hover-color-2)',
    icon: <Search size={24} color="var(--icon-color-2)" />,
  },
  {
    id: 2,
    title: 'IP geolocation showing wrong location?',
    description:
      'IP geolocation is approximate and may not always be 100% accurate. Location data is based on ISP information and network routing.',
    iconColor: 'var(--hover-color-2)',
    icon: <CircleAlert size={24} color="var(--icon-color-2)" />,
  },
  {
    id: 3,
    title: 'Service taking too long to respond?',
    description:
      'This may be due to network latency or high server load. Try refreshing the page or clearing your browser cache.',
    iconColor: 'var(--hover-color-2)',
    icon: <Clock size={24} color="var(--icon-color-2)" />,
  },
  {
    id: 4,
    title: 'Not sure what the data means?',
    description:
      'Visit our FAQ page for detailed explanations of each data field, including ISP, timezone, and coordinates.',
    iconColor: 'var(--hover-color-2)',
    icon: <FileQuestionMark size={24} color="var(--icon-color-2)" />,
  },
];
