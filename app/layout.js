import { Poppins, Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoogleTranslateHelper from "@/components/layout/GoogleTranslateHelper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ['400', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata = {
  title: "DPV Offshore",
  description: "Smarter and Faster Service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${dmSans.variable}`}>
      <body className={poppins.className}>
        <GoogleTranslateHelper />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
