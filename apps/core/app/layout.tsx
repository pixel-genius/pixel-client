import "@repo/ui/globals.scss";
import { cn } from "@repo/ui/lib/utils";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { ApiProvider } from "@repo/apis/providers/api-provider";
import { Toaster, FloatingChatProvider } from "@repo/ui/components";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ReactNode, Fragment } from "react";

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
      <html
        lang="en"
        className="h-full overflow-x-hidden"
        suppressHydrationWarning
      >
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
              <FloatingChatProvider
                initialEnabled={true}
                supportName="Pixel Support"
              >
                <Fragment>{children}</Fragment>
              </FloatingChatProvider>
            </NuqsAdapter>
          </ThemeProvider>
          <Toaster richColors />
        </body>
      </html>
    </ApiProvider>
  );
}
