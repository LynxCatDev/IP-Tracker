import {
  Ban,
  BookOpen,
  CircleAlert,
  CircleCheck,
  FileText,
  Scale,
  Shield,
  UserCheck,
} from 'lucide-react';

export const privacyGeneralCardInfo = [
  "Use different search engines like DuckDuckGo that don't track your searches",
  "Enable 'Do Not Track' in your browser settings (though not all sites honor it)",
  'Use privacy-focused email services like ProtonMail or Tutanota',
  'Disable location services when not needed',
  'Review and adjust privacy settings on social media platforms',
  'Use encrypted messaging apps like Signal for sensitive communications',
  'Consider using Tor browser for maximum anonymity',
  'Read privacy policies to understand how your data is used',
];

export const aboutGeneralCardInfo = [
  "IP Tracker is a comprehensive IP address lookup tool that provides detailed information about any IP address. Whether you need to check your own IP address or look up information about another IP, we've got you covered.",
  'Our service automatically detects your public IP address and displays detailed geolocation information including your city, region, country, ISP (Internet Service Provider), timezone, and geographic coordinates. You can also manually lookup any IPv4 address to get the same comprehensive information.',
  "We use multiple reliable data sources and APIs to ensure accuracy, and we're constantly updating our database to provide you with the most current information available. All lookups are performed securely and we never store your IP address or any personal information.",
  "Whether you're a network administrator, security professional, developer, or just curious about IP addresses, IP Tracker provides the tools and information you need in a clean, easy-to-use interface.",
];

export const securityGeneralCardInfo = [
  'Never access sensitive accounts (banking, email) on public Wi-Fi without a VPN',
  'Disable automatic Wi-Fi connections to unknown networks',
  'Use two-factor authentication (2FA) whenever possible',
  'Avoid clicking suspicious links or downloading files from untrusted sources',
  "Regularly change your router's admin password",
  'Turn off file sharing and AirDrop when on public networks',
  'Use a password manager to generate and store strong passwords',
  "Enable your router's guest network for visitors",
];

export const accessGeneralCardInfo = [
  'Choose VPN providers with servers in multiple countries for maximum flexibility',
  'Look for VPNs optimized for streaming with fast speeds and unlimited bandwidth',
  'Clear your browser cookies before switching VPN locations',
  'Some streaming services detect VPNs - choose providers with anti-detection features',
  "Test different server locations if one doesn't work for your desired content",
  'Consider VPNs with dedicated streaming servers for better performance',
  'Be aware of terms of service - some platforms prohibit VPN usage',
  'Use split tunneling to route only streaming traffic through VPN',
];

export const termsGeneralCardInfo = [
  {
    id: 1,
    title: 'Acceptance of Terms',
    content: [
      'By accessing and using IP Tracker, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.',
      'If you do not agree to these terms, please do not use our service.',
      'We reserve the right to update these terms at any time. Continued use of the service constitutes acceptance of any changes.',
    ],
    icon: <UserCheck color="var(--icon-color-2)" size={24} />,
    iconBgColor: 'var(--hover-color-2)',
  },
  {
    id: 2,
    title: 'Service Description',
    content: [
      'IP Tracker provides IP address lookup and geolocation information services.',
      'We offer automatic IP detection for your current connection and manual IP lookup capabilities.',
      'The service includes detailed information such as location, ISP, timezone, and network data.',
      'All information is provided for informational purposes only and should not be relied upon for critical decisions.',
    ],
    icon: <BookOpen color="var(--icon-color-2)" size={24} />,
    iconBgColor: 'var(--hover-color-2)',
  },
  {
    id: 3,
    title: 'Privacy & Data Collection',
    content: [
      'We do not store your IP address or personal information beyond what is necessary to provide the service.',
      'IP lookups are processed in real-time and not logged or tracked.',
      'We may use cookies and similar technologies to improve user experience.',
      'For detailed information, please refer to our Privacy Policy.',
    ],
    icon: <Shield color="var(--icon-color-2)" size={24} />,
    iconBgColor: 'var(--hover-color-2)',
  },
  {
    id: 4,
    title: 'Acceptable Use',
    content: [
      'You agree to use IP Tracker only for lawful purposes.',
      'You will not use the service to harass, abuse, or harm others.',
      'You will not attempt to circumvent any security measures or access restrictions.',
      'You will not use automated systems to make excessive requests to our service.',
      "You will not use the service for any illegal activities or to violate others' privacy rights.",
    ],
    icon: <CircleCheck color="var(--icon-color-2)" size={24} />,
    iconBgColor: 'var(--hover-color-2)',
  },
  {
    id: 5,
    title: 'Prohibited Activities',
    content: [
      'Using the service to track or stalk individuals without their consent.',
      'Attempting to reverse engineer, decompile, or extract source code from our service.',
      'Distributing malware, viruses, or any harmful code through the service.',
      'Making false or misleading claims about the service or its capabilities.',
      'Using the service in any way that could damage, disable, or impair our servers or networks.',
    ],
    icon: <Ban color="var(--icon-color-2)" size={24} />,
    iconBgColor: 'var(--hover-color-2)',
  },
  {
    id: 6,
    title: 'Disclaimer of Warranties',
    content: [
      'IP Tracker is provided "as is" without warranties of any kind, either express or implied.',
      'We do not guarantee the accuracy, completeness, or reliability of any information provided.',
      'IP geolocation data may not always be 100% accurate due to various technical factors.',
      'We do not warrant that the service will be uninterrupted, secure, or error-free.',
      'Use of the service is at your own risk.',
    ],
    icon: <CircleAlert color="var(--icon-color-2)" size={24} />,
    iconBgColor: 'var(--hover-color-2)',
  },
  {
    id: 7,
    title: 'Limitation of Liability',
    content: [
      'To the maximum extent permitted by law, IP Tracker shall not be liable for any indirect, incidental, special, or consequential damages.',
      'We are not responsible for any damages resulting from use or inability to use the service.',
      'Our total liability shall not exceed the amount you paid to use the service (which is currently free).',
      'Some jurisdictions do not allow certain liability limitations, so these may not apply to you.',
    ],
    icon: <Scale color="var(--icon-color-2)" size={24} />,
    iconBgColor: 'var(--hover-color-2)',
  },
  {
    id: 8,
    title: 'Intellectual Property',
    content: [
      'All content, features, and functionality of IP Tracker are owned by us and protected by copyright, trademark, and other laws.',
      'You may not copy, modify, distribute, or create derivative works without our express written permission.',
      'The IP Tracker name and logo are trademarks and may not be used without authorization.',
      'Third-party trademarks and service marks are the property of their respective owners.',
    ],
    icon: <FileText color="var(--icon-color-2)" size={24} />,
    iconBgColor: 'var(--hover-color-2)',
  },
];
