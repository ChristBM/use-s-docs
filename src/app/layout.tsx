import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner } from "nextra/components";
import { MessageSquare } from "lucide-react";
import { getPageMap } from "nextra/page-map";
import Logo from "@/components/logo";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "useS – React Hook for State Management",
    template: "%s – useS",
  },
  description:
    "useS is a modern React hook for local and global state management. Achieve clean, immutable, and scalable state logic with zero boilerplate.",
  alternates: {
    canonical: "https://use-s-react.christbm.dev",
  },
  keywords: [
    "React",
    "State Management",
    "React Hooks",
    "useState alternative",
    "Global State",
    "Custom Hook",
    "Immutability",
    "Frontend",
    "Web Development",
    "JavaScript",
    "useS",
    "ChristBM",
  ],
  authors: [{ name: "ChristBM", url: "https://github.com/ChristBM" }],
  creator: "ChristBM",
  publisher: "ChristBM",
  openGraph: {
    title: "useS – React Hook for State Management",
    description:
      "Clean and scalable state management with a lightweight React hook. No boilerplate, full control.",
    url: "https://use-s-react.christbm.dev",
    siteName: "useS",
    locale: "en_US",
    images: [
      {
        url: "opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "useS – React Hook for State Management",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "useS – React Hook for State Management",
    description:
      "Modern state management for React. Built for simplicity, immutability, and global reach.",
    images: ["opengraph-image.jpg"],
    creator: "@elboffill",
  },
  metadataBase: new URL("https://use-s-react.christbm.dev"),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <Layout
          banner={
            <Banner storageKey="some-key">useS v2.4.0 is released 🎉</Banner>
          }
          navbar={
            <Navbar
              logo={<Logo />}
              projectLink="https://github.com/ChristBM/use-s"
              chatLink="https://x.com/elboffill"
              chatIcon={<MessageSquare />}
            />
          }
          pageMap={await getPageMap()}
          sidebar={{
            toggleButton: false,
          }}
          docsRepositoryBase="https://github.com/ChristBM/use-s-docs"
          footer={
            <Footer>
              <Link
                href="https://github.com/ChristBM/use-s?tab=MIT-1-ov-file"
                className="my-0 mx-auto hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                MIT {new Date().getFullYear()} © ChristBM
              </Link>
            </Footer>
          }
          darkMode
        >
          {children}
        </Layout>

        <Analytics />
      </body>
    </html>
  );
}
