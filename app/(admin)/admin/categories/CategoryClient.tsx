"use client";

import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useCategoryModal from "@/hooks/useCategoryModal";
import CategoryCard from "@/components/ui/cards/categoryCard";

const CategoryClient = ({ category }: { category: any[] }) => {
  const categoryModal = useCategoryModal();
  return (
    <div>
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center justify-start gap-1">
          <div>
            <Input className="outline-none outline-border-none focus-visible:ring-0 focus-visible:ring-offset-0" />
          </div>
          <div>
            <Button>
              <Search />
              <span className="hidden md:block">Search</span>
            </Button>
          </div>
        </div>
        <div>
          <Button onClick={() => categoryModal.onOpen()}>
            Add
            <span className="hidden md:block ml-1">New Category</span>
          </Button>
        </div>
      </div>
      <div>
        <div className="my-1 py-1 font-semibold text-slate-700 dark:text-slate-300">
          Founded Category: {category.length}
        </div>
        <div className="flex flex-col gap-3">
          {category.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryClient;
