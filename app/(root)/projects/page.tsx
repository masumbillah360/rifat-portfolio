"use client";
import { Input } from "@/components/ui/input";
import QueryPagination from "@/components/ui/query-pagination";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Search, SlidersHorizontal, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

const ProjectPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["Social", "Design", "Brand", "Other"];

  useEffect(() => {
    const queryCategory = queryString.parse(window.location.search).category;
    if (typeof queryCategory === "string") {
      setSelectedCategory(queryCategory);
    } else {
      setSelectedCategory(null);
    }
  }, [searchParams]);

  const handleCategoryClick = (category: string) => {
    const newCategory = selectedCategory === category ? null : category;

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
        <div className="py-2 px-4 border rounded-full w-36 flex justify-center items-center gap-2">
          <SlidersHorizontal />
          Filter
        </div>
        <div className="py-2 px-4 border rounded-full flex-1 flex justify-between items-center">
          <div className="flex items-center justify-start gap-4 w-full">
            <Search />
            <div className="w-full">
              <Input className="min-w-full border-none" placeholder="Search" />
            </div>
          </div>
          <div>
            <button>
              <X />
            </button>
          </div>
        </div>
        <div className="py-2 px-4 border rounded-full w-48 flex justify-center items-center">
          Recommended
        </div>
      </div>
      <ScrollArea className="w-full">
        <div className="mt-10 flex flex-row gap-5 mb-4">
          {categories.map((category, i) => (
            <div
              key={i}
              className={`flex items-center py-2 px-4 border rounded-full cursor-pointer ${
                selectedCategory === category
                  ? "bg-slate-900 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-8">
        {categories.map((cat) => (
          <div key={cat} className="border rounded"></div>
        ))}
      </div>
      <div className="m-6 px-4 py-2 rounded border">
        <QueryPagination totalPage={10} />
      </div>
    </section>
  );
};

export default ProjectPage;
