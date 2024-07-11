"use server";

import { db } from "@/db";
import { eq, not } from "drizzle-orm";
import { content } from "@/db/schema";
import getCurrentUser from "./getUser.action";


export const getAllContent = async () => {
  try {
    const contents = await db.query.content.findMany({
      orderBy: (cont, { desc }) => [desc(cont.id)],
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
    if (!isContent) {
      return null;
    }
    return isContent;
  } catch (error) {
    return null;
  }
};

export const toggleContentStatus = async (id:string) => {
  const user = await getCurrentUser();
  if(!user || !user?.email) {
    throw new Error("Unauthorized user");
  }
  try {
    const updatedContent = await db.update(content).set({
      contentStatus: not(content.contentStatus),
    }).returning();
    return updatedContent[0];
  } catch (error) {
    console.log(["ERROR TO UPDATE ", error])
  }

}
