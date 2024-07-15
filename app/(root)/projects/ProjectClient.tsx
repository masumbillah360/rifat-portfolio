"use client";

import queryString from "query-string";
import { Input } from "@/components/ui/input";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import QueryPagination from "@/components/ui/query-pagination";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ContentCard from "@/components/ui/cards/public-content-card";

const ProjectClient = ({
  contents,
  categories,
  totalPage = 0,
  currentPage,
  total,
}: {
  contents: any[];
  categories: any[];
  totalPage?: number;
  currentPage?: number;
  total?: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  useEffect(() => {
    const queryCategory = queryString.parse(window.location.search).category;
    if (typeof queryCategory === "string") {
      setSelectedCategory(queryCategory);
    } else {
      setSelectedCategory(null);
    }
  }, [searchParams]);
  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSearch = e.target.value.trim();
      const queryParams = {
        ...queryString.parse(window.location.search),
        search: newSearch || undefined,
      };

      const newQuery = queryString.stringify(queryParams);
      router.push(`?${newQuery}`);
    },
    [router]
  );
  const handleCloseSearch = useCallback(() => {
    if (searchRef.current) {
      searchRef.current.value = "";
    }
    const queryParams = {
      ...queryString.parse(window.location.search),
      search: undefined,
    };

    const newQuery = queryString.stringify(queryParams);
    router.push(`?${newQuery}`);
  }, [router]);

  if (!hasMounted) {
    return null;
  }

  const handleCategoryClick = (category: string) => {
    const newCategory = selectedCategory == category ? null : category;

    const queryParams = {
      ...queryString.parse(window.location.search),
      category: newCategory || undefined,
    };

    const newQuery = queryString.stringify(queryParams);
    router.push(`?${newQuery}`);
  };

  return (
    <section className="min-h-screen mt-4">
      <div className="flex flex-row gap-2 w-full">
        <div className="hidden py-2 px-4 border rounded-full w-36 lg:flex justify-center items-center gap-2">
          <SlidersHorizontal />
          Filter
        </div>
        <div className="py-2 px-4 border rounded-full flex-1 flex justify-between items-center">
          <div className="flex items-center justify-start gap-4 w-full">
            <Search />
            <div className="w-full">
              <Input
                ref={searchRef}
                onChange={handleSearch}
                className="min-w-full border-none"
                placeholder="Search"
              />
            </div>
          </div>
          <div>
            {searchRef.current && searchRef.current.value && (
              <button onClick={handleCloseSearch}>
                <X />
              </button>
            )}
          </div>
        </div>
        <div className="hidden py-2 px-4 border rounded-full w-48 lg:flex justify-center items-center">
          Recommended
        </div>
      </div>
      <ScrollArea className="w-full">
        <div className="mt-10 flex flex-row gap-5 mb-4">
          {categories.map((category, i) => (
            <div
              key={i}
              className={`flex items-center py-2 px-4 border rounded-full cursor-pointer ${
                selectedCategory == category.id
                  ? "bg-slate-900 text-white"
                  : "bg-white dark:bg-slate-600 text-slate-800 dark:text-slate-200"
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.category}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-8">
        {contents.map((content) => (
          <div key={content.content_id} className="border rounded">
            <ContentCard content={content} />
          </div>
        ))}
      </div>
      <div className="m-6 px-4 py-2 rounded border">
        <QueryPagination totalPage={totalPage} />
      </div>
    </section>
  );
};

export default ProjectClient;
