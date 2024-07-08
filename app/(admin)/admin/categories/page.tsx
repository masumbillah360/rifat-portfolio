import React from "react";
import CategoryClient from "./CategoryClient";
import SectionHeading from "@/components/ui/sectionHeading";
import { addCategory, getAllCategory } from "@/actions/category.action";

const CategoryPage = async() => {
  // const category = await getAllCategory();
  // console.log(["category"], category)
  // const add_category = await addCategory()
  // console.log({add_category})
  const category = [
    {
      id: 1,
      category_id: "123",
      category: "Name",
      description: "Description",
      content: []
    }
  ]
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
