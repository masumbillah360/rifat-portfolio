import { db } from "@/db";
import { eq } from "drizzle-orm";
import { category, content } from "@/db/schema";
import getCurrentUser from "@/actions/getUser.action";

interface IParams {
  contentId?: string;
}

export async function PATCH(request: Request, { params }: { params: IParams }) {
  try {
    const user = await getCurrentUser();
    if (!user || !user?.email) {
      throw new Error("Unauthorized User");
    }
    if (!params?.contentId || typeof params?.contentId !== "string") {
      throw new Error("Content ID is required and it will be string!");
    }
    const {
      title,
      subTitle,
      description,
      thumbnail,
      category: cat,
    } = await request.json();

    const getCategory = await db.query.category.findFirst({
      where: eq(category.category, cat),
    });
    if (!getCategory) {
      throw new Error("Category not found!");
    }
    const isContent = await db.query.content.findFirst({
      where: eq(content.content_id, params.contentId),
    });
    if (!getCategory) {
      throw new Error("Content not found!");
    }
    const updatedContent = await db
      .update(content)
      .set({
        title,
        subTitle,
        thumbnail,
        description,
        categoryId: getCategory.id,
      })
      .where(eq(content.content_id, params.contentId))
      .returning();

    if (
      isContent?.thumbnail &&
      Array.isArray(isContent.thumbnail) &&
      isContent.thumbnail.length > 0
    ) {
      const unmatchedThumbnails = isContent?.thumbnail?.filter(
        // @ts-ignore
        (thumbnail) => !updatedContent[0]?.thumbnail?.includes(thumbnail)
      );

      if (unmatchedThumbnails.length > 0) {
        // If there are unmatched thumbnails, delete them using the API
        try {
          // await utapi.deleteFiles(unmatchedThumbnails);
        } catch (error) {
          console.error("Failed to delete files:", error);
        }
      }
    }

    return Response.json(updatedContent);
  } catch (error: any) {
    console.log(["UPDATE CONTENT"], error);
    return Response.error();
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const user = await getCurrentUser();
    if (!user || !user?.email) {
      throw new Error("Unauthorized User");
    }
    if (!params?.contentId || typeof params?.contentId !== "string") {
      throw new Error("categoryId is required and it will be string!");
    }
    const deleteContent = await db
      .delete(content)
      .where(eq(content.content_id, params.contentId as string));
    return Response.json(deleteContent);
  } catch (error: any) {
    return Response.error();
  }
}
