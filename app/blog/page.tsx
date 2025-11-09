import { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import { PageInfo, BlogCard } from '@/components';
import { blogArticles } from '@/constants/blogArticlesData';
import './blog.scss';

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

export default function BlogPage() {
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

        <div className="blog-page--grid">
          {blogArticles.map((article) => (
            <BlogCard
              key={article.slug}
              slug={article.slug}
              title={article.title}
              description={article.description}
              icon={article.icon}
              readTime={article.readTime}
              date={article.date}
              color={article.color}
            />
          ))}
        </div>

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
