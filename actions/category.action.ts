"use server";

import { db } from "@/db";
import { category } from "@/db/schema/category.model";

export const getAllCategory = async () => {
  try {
    const categories = await db.query.category.findMany({
      orderBy: (cat, { asc }) => [asc(cat.id)],
      with: {
        content: {
          columns: {
            title: true,
            sellCount: true,
          },
          orderBy: (content, { desc }) => [desc(content.id)],
        },
      },
    });
    return categories;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addCategory = async () => {
  try {
    const newCategory = await db.insert(category).values({
      category: "New Category",
      description: "This is a new category",
    });
    return newCategory;
  } catch (error) {
    console.log(error);
    return {};
  }
};
