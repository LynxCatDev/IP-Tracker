import { ReactNode } from 'react';
import { ArrowLeft, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components';
import './BlogArticle.scss';

interface BlogArticleProps {
  title: string;
  readTime: string;
  publishDate: string;
  icon: LucideIcon;
  children: ReactNode;
}

export function BlogArticle({
  title,
  readTime,
  publishDate,
  icon: Icon,
  children,
}: BlogArticleProps) {
  return (
    <div className="blog-article">
      <div className="blog-article__header">
        <Link href="/blog" prefetch={false}>
          <Button variant="primary" icon={<ArrowLeft size={16} />}>
            Back to Blog
          </Button>
        </Link>
        <div className="blog-article__meta">
          <Icon size={20} />
          <span>{readTime}</span>
          <span>•</span>
          <span>{publishDate}</span>
        </div>
      </div>

      <article className="blog-article__content">
        <h1>{title}</h1>
        {children}

        <div className="blog-article__footer">
          <Link href="/blog" prefetch={false}>
            <Button
              href="/blog"
              variant="primary"
              icon={<ArrowLeft size={16} />}
            >
              Back to Blog
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}
