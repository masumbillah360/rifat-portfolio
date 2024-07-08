import { db } from "@/db";
import { category } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const { category: cat, description } = await request.json();
    const newCategory = await db.insert(category).values({
      category: cat,
      description,
    });
    return Response.json(newCategory);
  } catch (error: any) {
    console.log(["ADD Category "],error)
    throw new error(error.message);
  }
}

