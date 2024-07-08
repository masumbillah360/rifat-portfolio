import getCurrentUser from "@/actions/getUser.action";
import { db } from "@/db";
import { category } from "@/db/schema";
import { eq } from "drizzle-orm";

interface IParams {
  categoryId?: string;
}

export async function PATCH(request: Request, { params }: { params: IParams }) {
  try {
    const user = await getCurrentUser();
    if (!user || user?.email) {
      throw new Error("Unauthorized User");
    }
    if (!params?.categoryId || typeof params?.categoryId !== "string") {
      throw new Error("categoryId is required and it will be string!");
    }
    const { category: cat, description } = await request.json();
    const newCategory = await db
      .update(category)
      .set({
        category: cat,
        description,
      })
      .where(eq(category.category_id, params.categoryId as string));
    return Response.json(newCategory);
  } catch (error: any) {
    throw new error(error.message);
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const user = await getCurrentUser();
    if (!user || user?.email) {
      throw new Error("Unauthorized User");
    }
    if (!params?.categoryId || typeof params?.categoryId !== "string") {
      throw new Error("categoryId is required and it will be string!");
    }
    const newCategory = await db
      .delete(category)
      .where(eq(category.category_id, params.categoryId as string));
    return Response.json(newCategory);
  } catch (error: any) {
    throw new error(error.message);
  }
}
