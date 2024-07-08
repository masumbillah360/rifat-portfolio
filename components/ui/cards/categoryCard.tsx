"use client";
import React from "react";
interface CategoryProps {
  category: any;
}
const CategoryCard = ({ category }: CategoryProps) => {
  return (
    <div className="p-4 border rounded">
      <div className="font-semibold text-lg md:text-xl text-slate-800 dark:text-slate-300">{category.category}</div>
      <div className="font-light text-slate-600 dark:text-slate-300 text-ellipsis">{category.description}</div>
      <div className="mt-2">
        <p className="text-sm font-light">Total Contents: {category.content.length}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
