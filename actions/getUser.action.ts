"use server";
import { auth } from "@/auth";
export default async function getCurrentUser() {
  try {
    const session = await auth();
    if (!session || !session?.user?.email) {
      return null;
    }
    return session.user;
  } catch (error) {
    return null;
  }
}
