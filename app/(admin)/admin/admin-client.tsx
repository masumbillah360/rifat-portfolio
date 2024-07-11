"use client";

import React from "react";
import { User } from "next-auth";
import Marquee from "react-fast-marquee";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/sectionHeading";
import ContentCard from "@/components/ui/cards/content-card";
import CategoryCard from "@/components/ui/cards/categoryCard";
import { useRouter } from "next/navigation";

interface Props {
  contents: any[];
  categories: any[];
  user?: User | null;
}

const AdminClient = ({ contents, categories, user }: Props) => {
  const router = useRouter();
  const handleNavigate = (contents?: boolean) => {
    if (contents) {
      router.push("/admin/content");
    } else {
      router.push("/admin/categories");
    }
  };
  return (
    <div className="mt-4 mb-8 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <SectionHeading
            title="Categories are here"
            subTitle="To see all categories click on the see all button"
          />
          <Button
            onClick={() => handleNavigate()}
            variant="outline"
            className="absolute top-1/4 right-3"
          >
            See All
          </Button>
        </div>
        <Marquee>
          {categories.map((category) => (
            <div key={category.category_id} className="">
              <CategoryCard category={category} />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative">
          <SectionHeading
            title="Contents are here"
            subTitle="To see all contents click on the see all button"
          />
          <Button
            onClick={() => handleNavigate(true)}
            variant="outline"
            className="absolute top-1/4 right-3"
          >
            See All
          </Button>
        </div>
        <Marquee>
          {contents.map((content) => (
            <div className="border rounded h-96 w-80" key={content.content_id}>
              <ContentCard content={content} user={user} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default AdminClient;
