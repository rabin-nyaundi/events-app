import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@src/components/Layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SRM EVents",
  description: "SRM Events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="flex flex-col w-auto min-h-screen">
          <div className="flex flex-1 w-full h-auto border-4 border-blue-950">
          <Navbar />
            {children}</div>
        </section>
      </body>
    </html>
  );
}
