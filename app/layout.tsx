import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JWAR AL EBDAA | Construction Company",
  description: "Residential, Commercial & Industrial Construction Services",
  keywords: [
    "construction company in Dubai",
    "Dubai construction company",
    "building contractors Dubai",
    "civil construction company Dubai",
    "commercial construction company UAE",
    "building construction company Dubai",
    "UAE construction company",
    "construction contractors in Dubai",
    "Dubai construction services"
  ],

  verification: {
    google: "-umJ2yTYPiev31eZ9iXZS0sjaLGvJj7jvOZsg6qKSLY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Nav />
        <main className="flex-grow:1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
