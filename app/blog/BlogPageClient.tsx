"use client";

import Tiptap from "@/components/rich-editor/RichEditor";
import React, { useState } from "react";

const BlogPageClient = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  return (
    <div className="-z-50">
      <Tiptap
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
      />
    </div>
  );
};

export default BlogPageClient;
