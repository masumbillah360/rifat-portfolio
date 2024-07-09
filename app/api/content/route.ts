import { db } from "@/db";
import { eq } from "drizzle-orm";
import { content, category } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const {
      title,
      subTitle,
      description,
      thumbnail,
      category: catId,
    } = await request.json();
    const getCategory = await db.query.category.findFirst({
      where: eq(category.category_id, catId),
    });
    if (!getCategory) {
      throw new Error("Category not found!");
    }
    const newContent = await db.insert(content).values({
      title,
      subTitle,
      thumbnail,
      description,
      categoryId: getCategory.id,
    });
    return Response.json(newContent);
  } catch (error: any) {
    console.log(["ADD CONTENT "], error);
    throw new error(error.message);
  }
}
