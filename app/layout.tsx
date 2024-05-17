import { Inter } from "next/font/google";
import "./globals.css";
import Tabs from "./components/Tabs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary"; // Importing ErrorBoundary

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ErrorBoundary>
          <Header />
          <Tabs />
          <main className="flex-1 p-8 bg-gray-100">{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
