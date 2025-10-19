import { Eye, Lock, Shield } from 'lucide-react';

export const targetsData = [
  {
    id: 1,
    title: 'Security',
    description:
      'I want protection from hackers on public Wi-Fi and other unsecured networks.',
    icon: <Shield width={40} height={40} color="var(--icon-color-1)" />,
    gradient: 'var(--gradient-1)',
  },
  {
    id: 2,
    title: 'Privacy',
    description:
      'I want to prevent my government, ISP and advertisers from tracking me.',
    icon: <Eye width={40} height={40} color="var(--icon-color-5)" />,
    gradient: 'var(--gradient-5)',
  },
  {
    id: 3,
    title: 'Access',
    description:
      'I want to access Netflix, Twitch and other streaming services without being blocked.',
    icon: <Lock width={40} height={40} color="var(--icon-color-3)" />,
    gradient: 'var(--gradient-3)',
  },
];
