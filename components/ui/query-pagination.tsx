"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import queryString from "query-string";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";

interface QueryPaginationProps {
  totalPage: number;
  className?: string;
}

const QueryPagination = ({ totalPage, className }: QueryPaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = queryString.parse(window.location.search);
  const currentPage = Number(searchParams.page) || 1;

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const createPageURL = (pageNumber: string | number) => {
    const params = { ...searchParams, page: pageNumber.toString() };
    return `${pathname}?${queryString.stringify(params)}`;
  };

  const handlePageChange = (pageNumber: string | number) => {
    const newURL = createPageURL(pageNumber);
    router.push(newURL);
  };

  const visiblePageCount = 6; // Show 6 visible page numbers
  const halfVisibleCount = Math.floor(visiblePageCount / 2);

  const getVisiblePageNumbers = () => {
    const startPage = Math.max(1, currentPage - halfVisibleCount);
    const endPage = Math.min(totalPage, startPage + visiblePageCount - 1);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  const visiblePageNumbers = getVisiblePageNumbers();
  const endPage = visiblePageNumbers[visiblePageNumbers.length - 1];

  return (
    <Pagination className={className}>
      <PaginationContent>
        {prevPage >= 1 && (
          <PaginationItem>
            <PaginationPrevious onClick={() => handlePageChange(prevPage)} />
          </PaginationItem>
        )}
        {currentPage > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {visiblePageNumbers.map((pageNumber) => (
          <PaginationItem
            className="hidden sm:inline-block"
            key={`page-${pageNumber}`}
          >
            <PaginationLink
              isActive={currentPage === pageNumber}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
        {endPage < totalPage && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {nextPage <= totalPage && (
          <PaginationItem>
            <PaginationNext onClick={() => handlePageChange(nextPage)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default QueryPagination;
