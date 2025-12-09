import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../Button/Button';
import './Pagination.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export const Pagination = ({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          '...',
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pages.push(
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages,
        );
      }
    }

    return pages;
  };

  const getPageUrl = (page: number) => {
    return page === 1 ? basePath : `${basePath}?page=${page}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      {currentPage > 1 ? (
        <Button variant="link" href={getPageUrl(currentPage - 1)}>
          <ChevronLeft size={18} />
          <span>Previous</span>
        </Button>
      ) : (
        <button className="pagination--btn" disabled>
          <ChevronLeft size={18} />
          <span>Previous</span>
        </button>
      )}

      <div className="pagination--pages">
        {getPageNumbers().map((page, index) =>
          typeof page === 'number' ? (
            <Link
              key={index}
              href={getPageUrl(page)}
              className={`pagination--page ${
                currentPage === page ? 'active' : ''
              }`}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </Link>
          ) : (
            <span key={index} className="pagination--ellipsis">
              {page}
            </span>
          ),
        )}
      </div>

      {currentPage < totalPages ? (
        <Button variant="link" href={getPageUrl(currentPage + 1)}>
          <span>Next</span>
          <ChevronRight size={18} />
        </Button>
      ) : (
        <button className="pagination--btn" disabled>
          <span>Next</span>
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
};
