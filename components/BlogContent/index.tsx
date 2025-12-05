import {
  Book,
  Shield,
  Network,
  MapPin,
  Lock,
  Globe,
  LucideIcon,
  Shuffle,
  Wifi,
  ShieldCheck,
  Flame,
  Skull,
  AlertTriangle,
} from 'lucide-react';

// Export all content components
export { WhatIsIPAddressContent } from './WhatIsIPAddress';
export { ProtectIPAddressContent } from './ProtectIPAddress';
export { IPv4vsIPv6Content } from './IPv4vsIPv6';
export { IPGeolocationContent } from './IPGeolocation';
export { WhatIsVPNContent } from './WhatIsVPN';
export { UnderstandingDNSContent } from './UnderstandingDNS';
export { ProxyVsVPNContent } from './ProxyVsVPN';
export { PublicVsPrivateIPContent } from './PublicVsPrivateIP';
export { InternetSecurityTipsContent } from './InternetSecurityTips';
export { WhatIsFirewallContent } from './WhatIsFirewall';
export { DarkWebExplainedContent } from './DarkWebExplained';
export { HowHackersStealDataContent } from './HowHackersStealData';

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
  'proxy-vs-vpn': {
    slug: 'proxy-vs-vpn',
    title: "Proxy vs VPN: What's the Difference and Which Should You Use?",
    description:
      'Understand the key differences between proxies and VPNs, their strengths, weaknesses, and when to use each for optimal online privacy and security.',
    keywords: [
      'proxy vs vpn',
      'proxy server',
      'vpn comparison',
      'online privacy tools',
      'socks proxy',
      'http proxy',
      'anonymous browsing',
      'privacy protection',
    ],
    publishedTime: '2025-12-01T00:00:00.000Z',
    icon: Shuffle,
    readTime: '14 min read',
    date: 'December 1, 2025',
    color: '#f97316',
  },
  'public-vs-private-ip': {
    slug: 'public-vs-private-ip',
    title: 'Public vs Private IP Addresses: Everything You Need to Know',
    description:
      'Learn the difference between public and private IP addresses, how NAT works, and why this distinction is fundamental to how the internet functions.',
    keywords: [
      'public ip address',
      'private ip address',
      'nat explained',
      'network address translation',
      'ip addressing',
      'home network ip',
      'router ip address',
      'internal vs external ip',
    ],
    publishedTime: '2025-12-02T00:00:00.000Z',
    icon: Wifi,
    readTime: '13 min read',
    date: 'December 2, 2025',
    color: '#14b8a6',
  },
  'internet-security-tips': {
    slug: 'internet-security-tips',
    title: 'Essential Internet Security Tips: Protect Yourself Online',
    description:
      'Comprehensive guide to internet security best practices including password management, 2FA, safe browsing, and protecting your devices from cyber threats.',
    keywords: [
      'internet security tips',
      'online safety',
      'cyber security',
      'password security',
      'two factor authentication',
      'phishing protection',
      'safe browsing',
      'device security',
    ],
    publishedTime: '2025-12-03T00:00:00.000Z',
    icon: ShieldCheck,
    readTime: '15 min read',
    date: 'December 3, 2025',
    color: '#22c55e',
  },
  'what-is-firewall': {
    slug: 'what-is-firewall',
    title: 'What is a Firewall? Understanding Network Security Basics',
    description:
      'Learn what firewalls are, how they protect your network, different types of firewalls, and how to configure them for optimal security.',
    keywords: [
      'what is firewall',
      'network firewall',
      'firewall types',
      'windows firewall',
      'router firewall',
      'firewall security',
      'network protection',
      'firewall configuration',
    ],
    publishedTime: '2025-12-04T00:00:00.000Z',
    icon: Flame,
    readTime: '12 min read',
    date: 'December 4, 2025',
    color: '#ef4444',
  },
  'dark-web-explained': {
    slug: 'dark-web-explained',
    title: 'The Dark Web Explained: What It Really Is and How It Works',
    description:
      "Learn what the dark web actually is, how it works, what's really on it, and separate fact from fiction about this misunderstood part of the internet.",
    keywords: [
      'dark web',
      'deep web',
      'tor network',
      'onion sites',
      'dark web explained',
      'internet layers',
      'anonymous internet',
      'hidden web',
    ],
    publishedTime: '2025-12-05T00:00:00.000Z',
    icon: Skull,
    readTime: '13 min read',
    date: 'December 5, 2025',
    color: '#1f2937',
  },
  'how-hackers-steal-data': {
    slug: 'how-hackers-steal-data',
    title: 'How Hackers Actually Steal Your Data: Methods and Prevention',
    description:
      'Learn the real techniques hackers use to steal data — from phishing to malware to social engineering — and how to protect yourself.',
    keywords: [
      'how hackers steal data',
      'phishing attacks',
      'data theft',
      'cyber attacks',
      'malware',
      'social engineering',
      'password stealing',
      'identity theft',
    ],
    publishedTime: '2025-12-06T00:00:00.000Z',
    icon: AlertTriangle,
    readTime: '14 min read',
    date: 'December 6, 2025',
    color: '#dc2626',
  },
};
