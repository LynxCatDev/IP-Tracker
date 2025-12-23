import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogArticle } from '@/components';
import { blogArticlesMetadata } from '@/components/BlogContent';
import {
  WhatIsIPAddressContent,
  ProtectIPAddressContent,
  IPv4vsIPv6Content,
  IPGeolocationContent,
  WhatIsVPNContent,
  UnderstandingDNSContent,
  ProxyVsVPNContent,
  PublicVsPrivateIPContent,
  InternetSecurityTipsContent,
  WhatIsFirewallContent,
  DarkWebExplainedContent,
  HowHackersStealDataContent,
} from '@/components/BlogContent';

// In pages like about/page.tsx, faq/page.tsx
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

interface BlogArticlePageProps {
  params: {
    slug: string;
  };
}

// Map slugs to content components
const contentComponents: Record<string, React.ComponentType> = {
  'what-is-ip-address': WhatIsIPAddressContent,
  'protect-ip-address': ProtectIPAddressContent,
  'ipv4-vs-ipv6': IPv4vsIPv6Content,
  'ip-geolocation-explained': IPGeolocationContent,
  'what-is-vpn': WhatIsVPNContent,
  'understanding-dns': UnderstandingDNSContent,
  'proxy-vs-vpn': ProxyVsVPNContent,
  'public-vs-private-ip': PublicVsPrivateIPContent,
  'internet-security-tips': InternetSecurityTipsContent,
  'what-is-firewall': WhatIsFirewallContent,
  'dark-web-explained': DarkWebExplainedContent,
  'how-hackers-steal-data': HowHackersStealDataContent,
};

// Generate static params for all blog articles
export async function generateStaticParams() {
  return Object.keys(blogArticlesMetadata).map((slug) => ({
    slug,
  }));
}

// Generate metadata for each article
export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const metadata = blogArticlesMetadata[slug];

  if (!metadata) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'article',
      publishedTime: metadata.publishedTime,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const article = blogArticlesMetadata[slug];
  const ContentComponent = contentComponents[slug];

  if (!article || !ContentComponent) {
    notFound();
  }

  const Icon = article.icon;

  return (
    <BlogArticle
      title={article.title}
      readTime={article.readTime}
      publishDate={article.date}
      icon={Icon}
    >
      <ContentComponent />
    </BlogArticle>
  );
}
