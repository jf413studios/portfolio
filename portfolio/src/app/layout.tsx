import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GA from "./components/GA";
import PrelineScript from "./components/PrelineScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jose Fuentes",
  description: "My name is Jose Fuentes, a front-end developer and entrepreneur with a passion for creating next-gen digital products.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GA />
      </head>
      <body className={`bg-woodsmoke-50 dark:bg-woodsmoke-950 inter.className`}>
        <Header />
        {children}
        <Footer />
      </body>
      <PrelineScript />
    </html>
  );
}
