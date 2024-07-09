import { randomUUID } from "crypto";
import { category } from "./category.model";
import { relations, sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const content = sqliteTable("content", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  content_id: text("content_id")
    .$default(() => randomUUID().toString())
    .unique(),
  title: text("title", { length: 50 }).notNull(),
  subTitle: text("subTitle", { length: 150 }),
  description: text("content", { length: 5000 }).notNull(),
  thumbnail: text("thumbnail", { mode: "json" })
    .notNull()
    .default(sql`(json_array())`),
  categoryId: integer("categoryId"),
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const contentRelations = relations(content, ({ one }) => ({
  category: one(category, {
    fields: [content.categoryId],
    references: [category.id],
  }),
}));
