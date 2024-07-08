"use client";
import React, { useCallback } from "react";
import { Button } from "../button";
import { DeleteIcon, Edit } from "lucide-react";
import useCategoryModal from "@/hooks/category/useCategoryModal";

interface CategoryProps {
  category: any;
}
const CategoryCard = ({ category }: CategoryProps) => {
  const { openModal } = useCategoryModal();
  const handleOpenUpdateModal = () => {
    openModal("updateCategory", {
      id: category.category_id,
      category: category.category,
      description: category.description,
    });
  };
  const handleOpenDeleteModal = () => {
    openModal("deleteCategory", {
      id: category.category_id,
      category: category.category,
      description: category.description,
    });
  };

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
        <Button
          onClick={handleOpenUpdateModal}
          className="text-green-500"
          size="icon"
          variant="outline"
        >
          <Edit />
        </Button>
        <Button
          onClick={handleOpenDeleteModal}
          className="text-rose-500"
          size="icon"
          variant="outline"
        >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;
