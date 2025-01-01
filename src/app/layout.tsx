import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { TracingBeam } from "@/components/partials/TracingBeam";
import { ThemeProvider } from "@/components/partials/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/constant/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`overflow-x-hidden ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          forcedTheme="dark"
        >
          <main className="relative w-full flex items-center justify-center dark">
            <Navbar className="top-1 md:top-2" />
            <TracingBeam>{children}</TracingBeam>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
