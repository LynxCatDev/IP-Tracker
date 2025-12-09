'use client';

import { useState } from 'react';
import { BlogCard, Pagination } from '@/components';
import { blogArticlesData } from '@/constants/blogArticlesData';

const ARTICLES_PER_PAGE = 6;

export const BlogContent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogArticlesData.length / ARTICLES_PER_PAGE);

  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = blogArticlesData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of the grid smoothly
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <>
      <div className="blog-page--grid">
        {currentArticles.map((article) => (
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <div className="blog-page--info">
        Showing {startIndex + 1}-{Math.min(endIndex, blogArticlesData.length)}{' '}
        of {blogArticlesData.length} articles
      </div>
    </>
  );
};
