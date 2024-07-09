import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Buddy by NextJS",
  description: "It will help to find you the books you wanted as well as recommend some popular books of your fav type!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        
        <div className="relative w-full justify-center flex items-center"><Navbar /></div>
        {children}
        </body>
    </html>
  );
}
