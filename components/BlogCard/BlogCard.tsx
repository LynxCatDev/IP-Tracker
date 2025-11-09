import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../Button/Button';
import './BlogCard.scss';

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  icon: ReactNode;
  readTime: string;
  date: string;
  color: string;
}

export const BlogCard = ({
  slug,
  title,
  description,
  icon,
  readTime,
  date,
  color,
}: BlogCardProps) => {
  return (
    <article className="blog-card">
      <div
        className="blog-card__icon"
        style={{
          backgroundColor: `${color}15`,
          color: color,
        }}
      >
        {icon}
      </div>

      <div className="blog-card__content">
        <h2 className="blog-card__title">{title}</h2>
        <p className="blog-card__description">{description}</p>

        <div className="blog-card__meta">
          <span className="blog-card__read-time">{readTime}</span>
          <span className="blog-card__separator">•</span>
          <span className="blog-card__date">{date}</span>
        </div>

        <Button
          variant="link"
          icon={<ArrowRight size={16} />}
          iconPosition="right"
          href={`/blog/${slug}`}
        >
          Read Article
        </Button>
      </div>
    </article>
  );
};
