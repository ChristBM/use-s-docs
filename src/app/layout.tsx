import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import Logo from "@/components/logo";
import "./globals.css";
import "nextra-theme-docs/style.css";

export const metadata: Metadata = {
  title: "useS",
  description:
    "Official documentation for use-s-react — a powerful React hook for managing local and global state with simplicity, immutability, and zero boilerplate.",
  keywords: [
    "React",
    "State Management",
    "React Hooks",
    "useState alternative",
    "Global State",
    "Immutable State",
    "JavaScript",
    "useS",
    "Frontend",
    "Web Development",
  ],
  authors: [{ name: "ChristBM", url: "https://github.com/ChristBM" }],
  creator: "ChristBM",
  publisher: "ChristBM",
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
            <Banner storageKey="some-key">useS v2.0.0 is released 🎉</Banner>
          }
          navbar={
            <Navbar
              logo={<Logo />}
              projectLink="https://github.com/ChristBM/use-s"
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
        >
          {children}
        </Layout>

        <Analytics />
      </body>
    </html>
  );
}
