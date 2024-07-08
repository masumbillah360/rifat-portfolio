import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionHeading from "@/components/ui/sectionHeading";
import { Search } from "lucide-react";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="pt-4">
      <SectionHeading
        title="All Categories"
        subTitle="Manage your categories from here."
      />
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
          <Button>
            <span className="hidden md:block">Add </span>New Category
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CategoryPage;
