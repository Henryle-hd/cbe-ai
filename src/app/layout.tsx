import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import AsideComponent from "@/components/aside";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cbe-ai",
  description:
    " web application that utilizes the ChatGPT API to provide an interactive and informative platform for students, teachers, and potential applicants seeking information about the College of Business Education (CBE)."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'grid grid-cols-12 gap-2')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="col-start-1 col-end-4">
            <AsideComponent />
          </div>
          <div className="col-start-4 col-end-13">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
