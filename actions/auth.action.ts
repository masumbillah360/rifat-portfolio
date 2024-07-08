"use server";
import { db } from "@/db";
import { user } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { signOut, signIn } from "@/auth";

export const doLogout = async () => {
  await signOut({ redirectTo: "/" });
};

export const doLogin = async (formData: FormData) => {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getUserByEmailPass = async (email: string, pwHash: string) => {
  const findUser = await db.query.user.findFirst({
    where: and(eq(user.email, email), eq(user.password, pwHash)),
  });
  if (findUser) {
    return {
      email: findUser?.email,
      password: findUser?.password,
    };
  } else {
    return null;
  }
};

