import Head from "next/head";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

// import SidebarTest from "@/components/sidebar/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lawfirm Dashboard",
  description: "Generated by Clickers",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <body className={inter.className}>
        <div className="main-content">{children}</div>
      </body>
    </html>
  );
}