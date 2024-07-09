"use server";

import { db } from "@/db";

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
