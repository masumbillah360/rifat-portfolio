import React from "react";
import BlogPageClient from "./BlogPageClient";

const BlogPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center flex-col">
      <div className="w-full">
        <BlogPageClient />
      </div>
    </section>
  );
};

export default BlogPage;
