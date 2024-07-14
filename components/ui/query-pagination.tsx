"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";
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
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const createPageURL = (pageNumber: string | number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const visiblePageCount = 12; // Show 12 visible page numbers
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

  const handlePageChange = (pageNumber: number) => {
    router.push(createPageURL(pageNumber));
  };

  return (
    <Pagination className={className}>
      <PaginationContent>
        {prevPage >= 1 && (
          <PaginationItem className="cursor-pointer antialiased select-none">
            <PaginationPrevious onClick={() => handlePageChange(prevPage)} />
          </PaginationItem>
        )}
        {currentPage > 4 && (
          <PaginationItem className="hidden sm:inline-block">
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {visiblePageNumbers.map((pageNumber) => (
          <PaginationItem
            className="hidden sm:inline-block cursor-pointer"
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
          <PaginationItem className="cursor-pointer antialiased select-none">
            <PaginationNext onClick={() => handlePageChange(nextPage)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default QueryPagination;
