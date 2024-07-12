import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Filter, Search, X } from "lucide-react";
import React from "react";

const ProjectPage = () => {
  const categories = [
    "Social",
    "Design",
    "Brand",
    "Other",
    "Social",
    "Design",
    "Brand",
    "Other",
    "Social",
    "Other",
    "Social",
    "Design",
    "Brand",
    "Other",
    "Social",
    "Design",
    "Brand",
    "Other",
    "Social",
    "Design",
    "Brand",
    "Other",
  ];
  return (
    <section className="min-h-screen mt-4">
      <div className="flex flex-row gap-2 w-full">
        <div className="py-2 px-4 border rounded-full w-36 flex justify-center items-center gap-2">
          <Filter />
          Filter
        </div>
        <div className="py-2 px-4 border rounded-full flex-1 flex justify-between items-center">
          <div className="flex items-center justify-start gap-4 w-full">
            <Search />
            <div className="w-full">
              <Input className="min-w-full border-none" placeholder="Search" />
            </div>
          </div>
          <div>
            <button>
              <X />
            </button>
          </div>
        </div>
        <div className="py-2 px-4 border rounded-full w-48 flex justify-center items-center">
          Recommended
        </div>
      </div>
      <ScrollArea className="w-full">
        <div className="mt-10 flex flex-row gap-5 mb-4">
          {categories.map((category, i) => (
            <div
              key={i}
              className="flex bg-slate-900 text-white items-center py-2 px-4 border rounded-full"
            >
              {category}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default ProjectPage;
