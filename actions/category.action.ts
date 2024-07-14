"use server";

import { db } from "@/db";

export const getAllCategory = async (limit?: number) => {
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
      limit: limit ? limit : 100,
    });
    return categories;
  } catch (error:any) {
    console.log(["TO GET CAT "],error.message);
    return [];
  }
};
