import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionHeading from "@/components/ui/sectionHeading";
import { Search } from "lucide-react";
import React from "react";
import CategoryClient from "./CategoryClient";

const CategoryPage = () => {
  return (
    <div className="pt-4">
      <SectionHeading
        title="All Categories"
        subTitle="Manage your categories from here."
      />
      <CategoryClient />
    </div>
  );
};

export default CategoryPage;
