import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import AsideComponent from "@/components/aside";
import SmallScreen from "@/components/menu";
import { ClerkProvider } from '@clerk/nextjs'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cbe-ai 🤖",
  description:
    " web application that utilizes the ChatGPT API to provide an interactive and informative platform for students, teachers, and potential applicants seeking information about the College of Business Education (CBE).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "grid grid-cols-12 gap-2")}>
      <ClerkProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="col-start-1 col-end-13 block md:hidden">
            <SmallScreen />
          </div>
          <div className="col-start-1 col-end-5  hidden  md:block lg:col-end-4">
            <AsideComponent />
          </div>

          <div className="col-start-1 col-end-13 md:col-start-5 lg:col-start-4">
            {children}
          </div>
        </ThemeProvider>
      </ClerkProvider>
    </body>
    </html >
  );
}
