import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Fragment, ReactNode } from "react";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

import { ApiProvider } from "@repo/apis/providers/api-provider";
import { Toaster } from "@repo/ui/components/atoms/sonner";
import "@repo/ui/globals.scss";
import { cn } from "@repo/ui/lib/utils";

import { ReactScan } from "./_components/react-scan";

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
  children: ReactNode;
}): JSX.Element {
  return (
    <ApiProvider>
      <html lang="en" className="h-full" suppressHydrationWarning>
        <body
          className={cn(inter.className, "h-full")}
          suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <NuqsAdapter>
              <ReactScan />
              <Fragment>{children}</Fragment>
            </NuqsAdapter>
          </ThemeProvider>
          <Toaster richColors />
        </body>
      </html>
    </ApiProvider>
  );
}
