"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  content: any;
}

const ContentCard = ({ content }: Props) => {
  return (
    <Link
      href={`/admin/content/${content.content_id}`}
      className="border rounded"
    >
      <div>
        <Image
          src={content.thumbnail[0]}
          alt="Content Thumb"
          className="rounded-t shadow object-cover"
          width={400}
          height={200}
        />
        <span className="py-1 px-2 font-semibold tracking-tight rounded text-xs border bg-green-700 text-slate-100">
          {content.category.category}
        </span>
      </div>
      <div className="p-2">
        <div className="text-slate-800 dark:text-slate-300 text-2xl font-semibold">
          {content.title}
        </div>
        <p className="text-gray-600 dark:text-gray-400 font-light">
          {content.subTitle}
        </p>
      </div>
    </Link>
  );
};

export default ContentCard;
