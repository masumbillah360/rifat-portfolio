"use server";

import { db } from "@/db";
import { category } from "@/db/schema";
import { desc } from "drizzle-orm";

export const getAllCategory = async (limit?: number) => {
  try {
    const categories = await db.query.category.findMany({
      orderBy: desc(category.id),
      with: {
        content: {
          columns: {
            title: true,
          },
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
