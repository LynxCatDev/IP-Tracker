import {
  AlertTriangle,
  Book,
  Flame,
  Globe,
  Lock,
  MapPin,
  Network,
  Shield,
  ShieldCheck,
  Shuffle,
  Skull,
  Wifi,
} from 'lucide-react';

export const blogArticlesData = [
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
  {
    slug: 'proxy-vs-vpn',
    title: "Proxy vs VPN: What's the Difference?",
    description:
      'Understand the key differences between proxies and VPNs, their strengths, weaknesses, and when to use each.',
    icon: <Shuffle size={24} />,
    readTime: '14 min read',
    date: 'December 1, 2025',
    color: '#f97316',
  },
  {
    slug: 'public-vs-private-ip',
    title: 'Public vs Private IP Addresses Explained',
    description:
      'Learn the difference between public and private IP addresses, how NAT works, and why this matters for your network.',
    icon: <Wifi size={24} />,
    readTime: '13 min read',
    date: 'December 2, 2025',
    color: '#14b8a6',
  },
  {
    slug: 'internet-security-tips',
    title: 'Essential Internet Security Tips',
    description:
      'Comprehensive guide to protecting yourself online with password management, 2FA, safe browsing, and more.',
    icon: <ShieldCheck size={24} />,
    readTime: '15 min read',
    date: 'December 3, 2025',
    color: '#22c55e',
  },
  {
    slug: 'what-is-firewall',
    title: 'What is a Firewall? Network Security Basics',
    description:
      'Learn what firewalls are, how they protect your network, different types, and how to configure them for security.',
    icon: <Flame size={24} />,
    readTime: '12 min read',
    date: 'December 4, 2025',
    color: '#ef4444',
  },
  {
    slug: 'dark-web-explained',
    title: 'The Dark Web Explained: What It Really Is',
    description:
      "Learn what the dark web actually is, how it works, what's really on it, and separate fact from fiction.",
    icon: <Skull size={24} />,
    readTime: '13 min read',
    date: 'December 5, 2025',
    color: '#1f2937',
  },
  {
    slug: 'how-hackers-steal-data',
    title: 'How Hackers Actually Steal Your Data',
    description:
      'Learn the real techniques hackers use — from phishing to malware to social engineering — and how to protect yourself.',
    icon: <AlertTriangle size={24} />,
    readTime: '14 min read',
    date: 'December 6, 2025',
    color: '#dc2626',
  },
];
