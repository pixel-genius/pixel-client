import "@repo/ui/globals.scss";
import { cn } from "@repo/ui/lib/utils";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { ApiProvider } from "@repo/apis/providers/api-provider";
import { Toaster } from "@repo/ui/components/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixel Genius",
  description: "Pixel Genius is a web3 social media platform.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ApiProvider>
      <html lang="en" className="h-full" suppressHydrationWarning>
        <body className={cn(inter.className, "h-full")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <NuqsAdapter>{children}</NuqsAdapter>
          </ThemeProvider>
          <Toaster richColors />
        </body>
      </html>
    </ApiProvider>
  );
}
