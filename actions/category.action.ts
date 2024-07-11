"use server";

import { db } from "@/db";

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

