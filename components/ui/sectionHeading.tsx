"use client";

import React from "react";
interface HeadingProps {
  title: string;
  subTitle?: string;
  center?: boolean;
}
const SectionHeading = ({ title, subTitle, center }: HeadingProps) => {
  return (
    <div
      className={`p-4 border mb-4 rounded ${
        center ? "text-center" : "text-start"
      }`}
    >
      <h3 className="p-0 text-slate-800 dark:text-slate-300">{title}</h3>
      {subTitle && (
        <p className="text-slate-600 dark:text-slate-400">{subTitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
