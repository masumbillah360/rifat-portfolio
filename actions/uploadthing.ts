"use server";

import { db } from "@/db";
import { eq } from "drizzle-orm";
import { content } from "@/db/schema";
import { UTApi } from "uploadthing/server";
import { getContentDetails } from "./content.action";

export const deleteImage = async (urls: string[], contentId?: string) => {
  try {
    if (urls.length > 0) {
      const utapi = new UTApi();
      const urlKeys = urls.map((url) => url.split("/f/")[1]);
      const response = await utapi.deleteFiles(urlKeys);
      if (response.success && contentId) {
        const getContent = await getContentDetails(contentId);
        // @ts-ignore
        const filteredUrls = getContent?.thumbnail?.filter((thumbnail) =>
          urls?.includes(thumbnail)
        );
        await db
          .update(content)
          .set({
            thumbnail: filteredUrls,
          })
          .where(eq(content.content_id, contentId));
      }
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
