// import axios from "axios";

// const options = {
//   method: "POST",
//   url: "https://api.uploadthing.com/v6/deleteFiles",
//   headers: {
//     "Content-Type": "application/json",
//     "X-Uploadthing-Api-Key": "YOUR_TOKEN",
//   },
//   data: { files: [""], fileKeys: [""], customIds: [""] },
// };

// try {
//   const { data } = await axios.request(options);
//   console.log(data);
// } catch (error) {
//   console.error(error);
// }

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
    console.log(["ADD Category "], error);
    throw new error(error.message);
  }
}

