"use server";

import { db } from "@/db";
import { category } from "@/db/schema/category.model";

export const getAllCategory = async () => {
  try {
    const categories = await db.query.category.findMany({
      orderBy: (cat, { desc }) => [desc(cat.id)],
      with: {
        content: {
          columns: {
            title: true,
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

export const addCategory = async (data: { category: string, description: string | undefined}) => {
  try {

    const newCategory = await db.insert(category).values(data);
    return newCategory;
  } catch (error) {
    console.log(error);
    return {};
  }
};