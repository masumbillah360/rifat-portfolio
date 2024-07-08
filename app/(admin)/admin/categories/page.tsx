import React from "react";
import CategoryClient from "./CategoryClient";
import { getAllCategory } from "@/actions/category.action";
import SectionHeading from "@/components/ui/sectionHeading";

const CategoryPage = async () => {
  const category = await getAllCategory();
  return (
    <div className="pt-4 px-2">
      <SectionHeading
        title="All Categories"
        subTitle="Manage your categories from here."
      />
      <CategoryClient category={category} />
    </div>
  );
};

export default CategoryPage;
