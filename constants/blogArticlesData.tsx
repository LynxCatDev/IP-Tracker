import { Book, Globe, Lock, MapPin, Network, Shield } from 'lucide-react';

export const blogArticles = [
  {
    slug: 'what-is-ip-address',
    title: 'What is an IP Address and How Does it Work?',
    description:
      'Learn the fundamentals of IP addresses, how they are assigned, and their role in internet communication.',
    icon: <Book size={24} />,
    readTime: '8 min read',
    date: 'November 4, 2025',
    color: '#3b82f6',
  },
  {
    slug: 'protect-ip-address',
    title: 'How to Protect Your IP Address from Tracking',
    description:
      'Discover effective methods to protect your IP address and maintain online privacy using VPNs, Tor, and more.',
    icon: <Shield size={24} />,
    readTime: '12 min read',
    date: 'November 4, 2025',
    color: '#10b981',
  },
  {
    slug: 'ipv4-vs-ipv6',
    title: 'IPv4 vs IPv6: Understanding the Differences',
    description:
      'Explore the key differences between IPv4 and IPv6 protocols and why the internet is transitioning to IPv6.',
    icon: <Network size={24} />,
    readTime: '10 min read',
    date: 'November 4, 2025',
    color: '#8b5cf6',
  },
  {
    slug: 'ip-geolocation-explained',
    title: 'Understanding Geolocation: How Websites Know Your Location',
    description:
      'Learn how geolocation technology works, its accuracy, and the privacy implications of location tracking.',
    icon: <MapPin size={24} />,
    readTime: '11 min read',
    date: 'November 4, 2025',
    color: '#f59e0b',
  },
  {
    slug: 'what-is-vpn',
    title: 'What is a VPN and How Does it Work?',
    description:
      'Discover how Virtual Private Networks encrypt your connection, protect your privacy, and bypass geographical restrictions.',
    icon: <Lock size={24} />,
    readTime: '9 min read',
    date: 'November 9, 2025',
    color: '#ec4899',
  },
  {
    slug: 'understanding-dns',
    title: "Understanding DNS: The Internet's Phone Book",
    description:
      "Learn how the Domain Name System translates website names into IP addresses and why it's crucial for internet functionality.",
    icon: <Globe size={24} />,
    readTime: '10 min read',
    date: 'November 9, 2025',
    color: '#06b6d4',
  },
];
