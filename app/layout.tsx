import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Tabs from "./components/Tabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel Menu",
  description: "Explore the dining options available at our hotel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-gray-800 text-white p-4">
            <h1 className="text-lg font-bold">Hotel Dining Options</h1>
          </header>
          <Tabs />
          <main className="flex-1">{children}</main>
          <footer className="bg-gray-800 text-white p-4 text-center">
            &copy; 2024 Hotel. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
