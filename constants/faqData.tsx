import { Globe } from 'lucide-react';

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
];
