"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/sectionHeading";

interface Props {
  content: any;
}
const ContentDetails = ({ content }: Props) => {

  const markup = { __html: content?.description };
  return (
    <div>
      <SectionHeading title={content?.title} subTitle={content?.subTitle} />
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <Button variant="ghost" className="cursor-default">
            Category
          </Button>
          <Button variant="outline" className="">
            {content?.category?.category}
          </Button>
        </div>
        <div className="flex gap-2 items-center">
         
        </div>
      </div>
      <div>
        <Image
          src={content?.thumbnail[0]}
          alt="Content Thumb"
          width={1000}
          height={800}
          className="h-[600px] w-full object-cover rounded"
        />
      </div>
      <div className="mt-4 border rounded mb-3 p-3">
        <div dangerouslySetInnerHTML={markup} />
      </div>
    </div>
  );
};

export default ContentDetails;
