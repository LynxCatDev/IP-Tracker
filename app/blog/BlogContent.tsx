import { BlogCard, Pagination } from '@/components';
import { blogArticlesData } from '@/constants/blogArticlesData';

const ARTICLES_PER_PAGE = 6;

interface BlogContentProps {
  currentPage: number;
}

export const BlogContent = ({ currentPage }: BlogContentProps) => {
  const totalPages = Math.ceil(blogArticlesData.length / ARTICLES_PER_PAGE);

  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = blogArticlesData.slice(startIndex, endIndex);

  return (
    <div className="blog-page--cards">
      <div className="blog-page--grid">
        {currentArticles.map((article, index) => (
          <BlogCard
            key={article.slug}
            slug={article.slug}
            title={article.title}
            description={article.description}
            icon={article.icon}
            readTime={article.readTime}
            date={article.date}
            color={article.color}
            index={index}
          />
        ))}
      </div>

      <div className="blog-page--pagination">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/blog"
        />

        <div className="blog-page--info">
          Showing {startIndex + 1}-{Math.min(endIndex, blogArticlesData.length)}{' '}
          of {blogArticlesData.length} articles
        </div>
      </div>
    </div>
  );
};
