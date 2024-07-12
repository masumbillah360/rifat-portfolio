import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Navbar from "@/components/shared/navbar/Navbar";
import CategoryModal from "@/components/modals/CategoryModal";
import ToasterProvider from "@/components/provider/toast-provider";
import { ThemeProvider } from "@/components/provider/theme-provider";
import UpdateCategoryModal from "@/components/modals/UpdateCategory";
import DeleteCategoryModal from "@/components/modals/DeleteCategory";


import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "@/app/api/uploadthing/core";
import DeleteContentModal from "@/components/modals/ContentDeleteModal";



const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Rifat -A dedicated designer from Bangladesh",
  description:
    "This is a Rifat Hasan, A passionate and fully dedicated designer from Bangladesh",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased scroll-pt-20",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextSSRPlugin
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          <main>
            <Navbar />
            <CategoryModal />
            <DeleteContentModal />
            <UpdateCategoryModal />
            <DeleteCategoryModal />
            {children}
          </main>
          <ToasterProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
