"use server";

import { db } from "@/db";
import { eq, not, or, like, count, desc } from "drizzle-orm";
import { content } from "@/db/schema";
import getCurrentUser from "./getUser.action";

type SearchParams = {
  category?: number;
  page?: string;
  sort?: string;
  search?: string | undefined;
  limit?: string;
};

export const getAllContent = async () => {
  try {
    const contents = await db.query.content.findMany({
      orderBy: desc(content.id),
      with: {
        category: {
          columns: {
            category: true,
          },
        },
      },
    });
    return contents;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAllContentWithPagination = async ({
  category: cat,
  search = "",
  page = "1",
  limit = "10",
}: SearchParams) => {
  try {
    const contents = await db.query.content.findMany({
      orderBy: desc(content.id),
      where: or(
        ...(cat ? [eq(content.categoryId, Number(cat))] : []),
        ...(search && search.length > 0
          ? [
              like(content.title, `%${search}%`),
              like(content.subTitle, `%${search}%`),
            ]
          : [])
      ),
      limit: parseInt(limit),
      offset: (parseInt(page) - 1) * parseInt(limit),
      with: {
        category: {
          columns: {
            category: true,
          },
        },
      },
    });
    const totalCount = await db
      .select({ count: count() })
      .from(content)
      .where(
        or(
          ...(cat && !isNaN(cat) ? [eq(content?.categoryId, Number(cat))] : []),
          ...(search && search.length > 0
            ? [
                like(content.title, `%${search}%`),
                like(content.subTitle, `%${search}%`),
              ]
            : [])
        )
      );
    return {
      data: contents,
      total: totalCount[0].count,
      currentPage: parseInt(page),
      limit: limit,
      totalPage: Math.ceil(Number(totalCount[0].count) / Number(limit)),
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const getContentDetails = async (id: string) => {
  try {
    const isContent = await db.query.content.findFirst({
      where: eq(content.content_id, id),
      with: {
        category: {
          columns: {
            category: true,
          },
        },
      },
    });
    console.log({ id, isContent });
    // if (!isContent) {
    //   return null;
    // }
    return isContent;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const toggleContentStatus = async (id: string) => {
  const user = await getCurrentUser();
  if (!user || !user?.email) {
    throw new Error("Unauthorized user");
  }
  try {
    const updatedContent = await db
      .update(content)
      .set({
        contentStatus: not(content.contentStatus),
      })
      .returning();
    return updatedContent[0];
  } catch (error) {
    console.log(["ERROR TO UPDATE ", error]);
  }
};
