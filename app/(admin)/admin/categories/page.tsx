import React from "react";
import CategoryClient from "./CategoryClient";
import SectionHeading from "@/components/ui/sectionHeading";
import { addCategory, getAllCategory } from "@/actions/category.action";

const CategoryPage = async() => {
  const category = await getAllCategory();
  console.log(["category"], category)
  // const add_category = await addCategory()
  // console.log({add_category})
  return (
    <div className="pt-4">
      <SectionHeading
        title="All Categories"
        subTitle="Manage your categories from here."
      />
      <CategoryClient category={category} />
    </div>
  );
};

export default CategoryPage;
