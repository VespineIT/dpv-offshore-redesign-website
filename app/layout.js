// app/layout.js
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleTranslateHelper from "@/components/GoogleTranslateHelper"; // Added this

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "DPV Offshore",
  description: "Smarter and Faster Service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <GoogleTranslateHelper /> {/* Added this */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}