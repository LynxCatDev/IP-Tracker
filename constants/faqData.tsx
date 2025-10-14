import {
  Globe,
  Network,
  Eye,
  RefreshCw,
  Shield,
  MapPin,
  Lock,
  RotateCcw,
  Building,
  EyeOff,
} from 'lucide-react';

export interface FAQItemInterface {
  question: string;
  answer: string;
  icon?: React.ReactNode;
  backgroundColor?: string;
}

export const contactsFAQData: Pick<FAQItemInterface, 'question' | 'answer'>[] =
  [
    {
      question: 'What is an IP address?',
      answer:
        'An IP address is a unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.',
    },
    {
      question: 'Is my IP address private?',
      answer:
        "Your public IP address is visible to websites and services you connect to. However, it doesn't reveal your exact physical location or personal information.",
    },
    {
      question: 'Can I change my IP address?',
      answer:
        'Yes, you can change your IP address by using a VPN service, proxy server, or by resetting your router in some cases.',
    },
    {
      question: 'How accurate is IP geolocation?',
      answer:
        'IP geolocation is generally accurate to the city level, but exact addresses cannot be determined from an IP address alone.',
    },
  ];

export const faqData: FAQItemInterface[] = [
  {
    question: 'What is an IP address?',
    answer:
      "An IP (Internet Protocol) address is a unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. Think of it as your device's digital home address on the internet. It allows devices to locate and communicate with each other across networks.",
    icon: <Globe color="var(--icon-color-1)" />,
    backgroundColor: 'var(--gradient-1)',
  },
  {
    question: "What's the difference between IPv4 and IPv6?",
    answer:
      'IPv4 uses a 32-bit address format (like 192.168.1.1) and can provide about 4.3 billion unique addresses. IPv6 uses a 128-bit format (like 2001:0db8:85a3:0000:0000:8a2e:0370:7334) and provides virtually unlimited addresses. IPv6 was created to solve the IPv4 address exhaustion problem.',
    icon: <Network color="var(--icon-color-2)" />,
    backgroundColor: 'var(--gradient-2)',
  },
  {
    question: 'Is my IP address private information?',
    answer:
      "Your public IP address is visible to websites and services you connect online. While it doesn't reveal your exact physical location or personal information like your name, it can indicate your general geographic area (city/region) and your Internet Service Provider. This information alone cannot be used to identify you personally.",
    icon: <Eye color="var(--icon-color-5)" />,
    backgroundColor: 'var(--gradient-5)',
  },
  {
    question: 'Can I change my IP address?',
    answer:
      'Yes! You can change your IP address in several ways: 1) Use a VPN service to mask your real IP, 2) Use a proxy server, 3) Reset your router (if you have a dynamic IP), 4) Contact to a different network. VPNs are the most popular and reliable method for changing your apparent IP address.',
    icon: <RefreshCw color="var(--icon-color-3)" />,
    backgroundColor: 'var(--gradient-3)',
  },
  {
    question: 'What is the difference between a public and private IP address?',
    answer:
      "A public IP address is assigned by your ISP and is visible to the outside world. It's how the internet identifies your network. A private IP address is used within your local network (like 192.168.x.x or 10.x.x.x) and is not directly accessible from the internet. Your router uses Network Address Translation (NAT) to convert between private and public IPs.",
    icon: <Shield color="var(--icon-color-4)" />,
    backgroundColor: 'var(--gradient-4)',
  },
  {
    question: 'How accurate is IP geolocation?',
    answer:
      "IP geolocation is generally accurate to the city or regional level (about 55-80% accuracy), but it cannot determine your exact street address. The accuracy depends on the database used and your ISP's infrastructure. Factors like VPNs, proxies, mobile networks, and satellite internet can significantly affect geolocation accuracy.",
    icon: <MapPin color="var(--icon-color-6)" />,
    backgroundColor: 'var(--gradient-7)',
  },
  {
    question: 'Can someone hack me with my IP address?',
    answer:
      'While your IP address alone is not enough to hack your system, it can be used for malicious activities like DDoS attacks or as a starting point for more sophisticated attacks. However, your router and firewall provide significant protection. To stay safe: use a firewall, keep software updated, use strong passwords, and consider using a VPN for additional security.',
    icon: <Lock color="var(--gradient-6)" />,
    backgroundColor: 'var(--gradient-8)',
  },
  {
    question: 'Why does my IP address keep changing?',
    answer:
      'Most residential internet connections use "dynamic" IP addresses, which means your ISP assigns you a new IP from their pool after a certain time period. Dynamic IPs happen when you restart your router or after a certain time period. Dynamic IPs are cheaper for ISPs to manage. If you need a consistent IP, you can request a "static" IP from your ISP (often for an additional fee).',
    icon: <RotateCcw color="var(--icon-color-1)" />,
    backgroundColor: 'var(--gradient-1)',
  },
  {
    question: 'What is an ISP and why does it matter?',
    answer:
      "ISP stands for Internet Service Provider - the company that provides your internet connection (like Comcast, AT&T, or Verizon). Your ISP assigns your IP address and routes all your internet traffic. They can see which websites you visit and may track your online activity. Your ISP's infrastructure also affects your internet speed, reliability, and the IP address range you're assigned.",
    icon: <Building color="var(--icon-color-3)" />,
    backgroundColor: 'var(--gradient-3)',
  },
  {
    question: 'Does using incognito mode hide my IP address?',
    answer:
      'No, incognito or private browsing mode does NOT hide your IP address. It only prevents your browser from saving your browsing history, cookies, and site data on your local device. Websites you visit can still see your real IP address, and your ISP can still track your activity. To actually hide your IP address, you need to use a VPN or proxy service.',
    icon: <EyeOff color="var(--icon-color-5)" />,
    backgroundColor: 'var(--gradient-5)',
  },
];
