import {
  Book,
  Shield,
  Network,
  MapPin,
  Lock,
  Globe,
  LucideIcon,
} from 'lucide-react';

// Export all content components
export { WhatIsIPAddressContent } from './WhatIsIPAddress';
export { ProtectIPAddressContent } from './ProtectIPAddress';
export { IPv4vsIPv6Content } from './IPv4vsIPv6';
export { IPGeolocationContent } from './IPGeolocation';
export { WhatIsVPNContent } from './WhatIsVPN';
export { UnderstandingDNSContent } from './UnderstandingDNS';

export interface BlogArticleMetadata {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  publishedTime: string;
  icon: LucideIcon;
  readTime: string;
  date: string;
  color: string;
}

export const blogArticlesMetadata: Record<string, BlogArticleMetadata> = {
  'what-is-ip-address': {
    slug: 'what-is-ip-address',
    title: 'What is an IP Address and How Does it Work?',
    description:
      'Learn the fundamentals of IP addresses, how they are assigned, their role in internet communication, and the difference between public and private IP addresses.',
    keywords: [
      'what is ip address',
      'how ip works',
      'ipv4 address',
      'ipv6 address',
      'public ip',
      'private ip',
      'internet protocol',
      'ip assignment',
    ],
    publishedTime: '2025-11-04T00:00:00.000Z',
    icon: Book,
    readTime: '8 min read',
    date: 'November 4, 2025',
    color: '#3b82f6',
  },
  'protect-ip-address': {
    slug: 'protect-ip-address',
    title: 'How to Protect Your IP Address from Tracking',
    description:
      'Discover effective methods to protect your IP address and maintain online privacy, including VPNs, Tor, proxies, and secure browsing practices.',
    keywords: [
      'hide ip address',
      'protect ip',
      'online privacy',
      'vpn for privacy',
      'tor browser',
      'proxy servers',
      'internet security',
      'anonymous browsing',
    ],
    publishedTime: '2025-11-04T00:00:00.000Z',
    icon: Shield,
    readTime: '12 min read',
    date: 'November 4, 2025',
    color: '#10b981',
  },
  'ipv4-vs-ipv6': {
    slug: 'ipv4-vs-ipv6',
    title: 'IPv4 vs IPv6: Understanding the Differences',
    description:
      'Learn the key differences between IPv4 and IPv6 protocols, including address formats, security features, and why the internet is transitioning to IPv6.',
    keywords: [
      'ipv4 vs ipv6',
      'internet protocol',
      'ipv6 benefits',
      'ip address format',
      'network protocols',
      'ipv6 adoption',
      'ip addressing',
    ],
    publishedTime: '2025-11-04T00:00:00.000Z',
    icon: Network,
    readTime: '10 min read',
    date: 'November 4, 2025',
    color: '#8b5cf6',
  },
  'ip-geolocation-explained': {
    slug: 'ip-geolocation-explained',
    title: 'Understanding Geolocation: How Websites Know Your Location',
    description:
      'Explore how geolocation technology works, its accuracy, common uses, and privacy implications of location tracking based on your IP address.',
    keywords: [
      'ip geolocation',
      'location tracking',
      'how geolocation works',
      'ip location',
      'geolocation privacy',
      'ip tracking',
      'location services',
    ],
    publishedTime: '2025-11-04T00:00:00.000Z',
    icon: MapPin,
    readTime: '11 min read',
    date: 'November 4, 2025',
    color: '#f59e0b',
  },
  'what-is-vpn': {
    slug: 'what-is-vpn',
    title: 'What is a VPN and How Does it Work?',
    description:
      'Comprehensive guide to Virtual Private Networks (VPNs), how they encrypt your connection, protect your privacy, and help you bypass geographical restrictions.',
    keywords: [
      'what is vpn',
      'vpn explained',
      'virtual private network',
      'vpn security',
      'vpn privacy',
      'how vpn works',
      'vpn benefits',
      'vpn encryption',
    ],
    publishedTime: '2025-11-09T00:00:00.000Z',
    icon: Lock,
    readTime: '9 min read',
    date: 'November 9, 2025',
    color: '#ec4899',
  },
  'understanding-dns': {
    slug: 'understanding-dns',
    title: "Understanding DNS: The Internet's Phone Book",
    description:
      "Learn how the Domain Name System (DNS) works, why it's essential for internet functionality, and how it translates website names into IP addresses.",
    keywords: [
      'what is dns',
      'dns explained',
      'domain name system',
      'how dns works',
      'dns servers',
      'dns lookup',
      'dns security',
      'dns privacy',
    ],
    publishedTime: '2025-11-09T00:00:00.000Z',
    icon: Globe,
    readTime: '10 min read',
    date: 'November 9, 2025',
    color: '#06b6d4',
  },
};
