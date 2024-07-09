CREATE TABLE `category` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`category_id` text,
	`category` text(50) NOT NULL,
	`description` text(150),
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `content` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`content_id` text,
	`title` text(50) NOT NULL,
	`subTitle` text(150),
	`content` text(5000) NOT NULL,
	`thumbnail` text,
	`categoryId` integer,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text,
	`name` text(30) NOT NULL,
	`email` text(30) NOT NULL,
	`password` text(16) NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `category_category_id_unique` ON `category` (`category_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `category_category_unique` ON `category` (`category`);--> statement-breakpoint
CREATE UNIQUE INDEX `content_content_id_unique` ON `content` (`content_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_user_id_unique` ON `user` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);