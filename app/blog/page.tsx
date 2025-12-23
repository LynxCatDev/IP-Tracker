import { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import { PageInfo } from '@/components';
import { BlogContent } from './BlogContent';
import { blogArticlesData } from '@/constants/blogArticlesData';
import './blog.scss';

// Static generation with hourly revalidation
export const dynamic = 'force-static';
export const revalidate = 3600;

const ARTICLES_PER_PAGE = 6;

export const metadata: Metadata = {
  title: 'Blog - IP Address & Internet Privacy Guides',
  description:
    'Learn everything about IP addresses, online privacy, and internet security through our comprehensive guides and tutorials.',
  keywords: [
    'ip address blog',
    'internet privacy guides',
    'ip security articles',
    'network tutorials',
    'vpn guides',
    'online privacy',
  ],
  openGraph: {
    title: 'IP Tracker Blog - Internet Privacy & Security Guides',
    description:
      'Comprehensive guides on IP addresses, internet privacy, and online security.',
  },
};

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page } = await searchParams;
  const totalPages = Math.ceil(blogArticlesData.length / ARTICLES_PER_PAGE);

  let currentPage = parseInt(page || '1', 10);

  // Validate page number
  if (isNaN(currentPage) || currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  return (
    <div className="blog-page">
      <PageInfo
        title="IP Tracker Blog"
        description="Comprehensive guides on IP addresses, internet privacy, and online security"
        icon={<BookOpen size={32} />}
      />

      <div className="blog-page--content">
        <div className="blog-page--intro">
          <h2>
            Welcome to our blog! Here you'll find comprehensive guides and
            articles about IP addresses, internet privacy, security, and
            networking. Whether you're a beginner or an advanced user, our
            articles will help you understand how the internet works and how to
            protect your online privacy.
          </h2>
        </div>

        <BlogContent currentPage={currentPage} />

        <div className="blog-page--footer">
          <div className="blog-page--cta">
            <h3>Stay Updated</h3>
            <p>
              We regularly publish new articles about internet privacy,
              security, and networking. Check back often for the latest guides
              and tutorials!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
