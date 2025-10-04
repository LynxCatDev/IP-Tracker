import { IPDetailsProps } from '@/types/ipData.interface';
import { Clock, Globe, MapPin, Network } from 'lucide-react';

export const IP_DETAILS_DATA = (ipData: IPDetailsProps) => [
  {
    id: 1,
    title: 'Location',
    icon: <MapPin />,
    value: `${ipData.city}, ${ipData.country_name}`,
    iconColor: 'blue',
  },
  {
    id: 2,
    title: 'Country',
    icon: <Globe />,
    value: `${ipData.country_name} (${ipData.country})`,
    iconColor: 'purple',
  },
  {
    id: 3,
    title: 'Internet Provider',
    icon: <Network />,
    value: ipData.org || 'Unknown',
    iconColor: 'green',
  },
  {
    id: 4,
    title: 'Timezone',
    icon: <Clock />,
    value: ipData.timezone || 'Unknown',
    iconColor: 'orange',
  },
];
