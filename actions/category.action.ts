"use server";

import { db } from "@/db";
import { category } from "@/db/schema/category.model";
import { desc } from "drizzle-orm";

export const getAllCategory = async () => {
  try {
    const categories = await db.query.category.findMany({
      orderBy: (cat, { asc }) => [asc(cat.id)],
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
        })
        return newCategory;
    } catch (error) {
        console.log(error)
        return {}
    }
}