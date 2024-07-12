import React from "react";
import { getAllCategory } from "@/actions/category.action";
import { Footer } from "@/components/shared/footer/Footer";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const categories = await getAllCategory(4);
  return (
    <div className="overflow-hidden">
      <section className="min-h-screen max-w-7xl mx-auto p-2">
        {children}
      </section>
      <Footer categories={categories} />
    </div>
  );
};

export default RootLayout;
