"use client";
import React from "react";
interface CategoryProps {
  category: any;
}
const CategoryCard = ({ category }: CategoryProps) => {
  return (
    <div className="p-4 border rounded">
      <div>{category.category}</div>
      <div>{category.description}</div>
    </div>
  );
};

export default CategoryCard;
