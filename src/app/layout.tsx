import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Platypus Solar Energy",
  description:
    "Powering your world efficiently with cutting-edge inverters. Explore reliable solutions for seamless energy conversion and control. Choose our inverters for a smarter energy future.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={poppins.className}>
        <Navbar />
        <div className="font-bold">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
