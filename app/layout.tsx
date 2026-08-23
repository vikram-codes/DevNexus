import type { Metadata } from "next";
import localFont from "next/font/local";
import ThemeProvider from "../context/Theme";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/ui/Navigation/Navbar/Navbar";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
});

export const metadata: Metadata = {
  title: "DevNexus",
  description: "A platform for developers to share knowledge, ask questions, and collaborate on projects.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={cn("h-full", "antialiased", inter.className, spaceGrotesk.variable, "font-sans", geist.variable)}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
