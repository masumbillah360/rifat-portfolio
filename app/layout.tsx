import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Navbar from "@/components/shared/navbar/Navbar";
import CategoryModal from "@/components/modals/CategoryModal";
import ToasterProvider from "@/components/provider/toast-provider";
import { ThemeProvider } from "@/components/provider/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Rifat -A dedicated designer from Bangladesh",
  description:
    "This is a Rifat Hasan, A passionate and fully dedicated designer from Bangladesh",
};

export default function RootLayout({
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
          <main>
            <Navbar />
            <CategoryModal />
            {children}
          </main>
          <ToasterProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
