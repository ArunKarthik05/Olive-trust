import { Inter } from "next/font/google"; 
import "./globals.css";
import LenisScroll from "@/lenis/SmoothScroll";


const inter = Inter({
  subsets: ["latin"], 
  variable: "--font-inter",
});

export const metadata = {
  title: "Olive Charity Trust",
  description: "Help us in tranforming education and lives of people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
       {/* <LenisScroll>{children}</LenisScroll> */}
       {children}
      </body>
    </html>
  );
}
