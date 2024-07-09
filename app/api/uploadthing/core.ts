import getCurrentUser from "@/actions/getUser.action";
import { UploadThingError } from "uploadthing/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: { maxFileSize: "8MB", maxFileCount: 2, minFileCount: 1 },
  })
    .middleware(async ({ req }) => {
      const user = await getCurrentUser();
      if (!user || !user?.id) throw new UploadThingError("Unauthorized user");
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
