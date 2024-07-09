import { category } from "@/db/schema";

export type UserType = {
  id: string;
  email: string;
};

export type Category = {
  category: string;
  id: number;
  description: string | null;
  category_id: string | null;
  createdAt: string;
  content: {
    title: string;
  }[];
};
