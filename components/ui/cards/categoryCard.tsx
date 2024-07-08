"use client";
import React from "react";
import { Button } from "../button";
import { DeleteIcon, Edit } from "lucide-react";
interface CategoryProps {
  category: any;
}
const CategoryCard = ({ category }: CategoryProps) => {
  return (
    <div className="p-4 border rounded flex flex-row justify-between items-start gap-2">
      <div>
        <div className="font-semibold text-lg md:text-xl text-slate-800 dark:text-slate-300">
          {category.category}
        </div>
        <div className="font-light text-slate-600 dark:text-slate-300 text-ellipsis">
          {category.description}
        </div>
        <div className="mt-2">
          <p className="text-sm font-light">
            Total Contents: {category.content.length}
          </p>
        </div>
      </div>
      <div className="flex gap-1">
        <Button className="text-green-500" size="icon">
          <Edit />
        </Button>
        <Button className="text-rose-500" size="icon">
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;
