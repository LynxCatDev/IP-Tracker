export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'IP Tracker - What Is My IP Address',
    description:
      'Free IP address lookup tool with detailed geolocation information including city, region, country, ISP, and timezone data.',
    url: 'https://yoursite.com',
    applicationCategory: 'NetworkingApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'IP Address Detection',
      'Geolocation Lookup',
      'ISP Information',
      'Timezone Detection',
      'Custom IP Lookup',
    ],
    publisher: {
      '@type': 'Organization',
      name: 'IP Tracker',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
