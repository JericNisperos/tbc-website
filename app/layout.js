import { Bricolage_Grotesque, Work_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "The Barrio Café — Digital Menu",
  description:
    "Signature Filipino flavors and artisanal refreshments at The Barrio Café.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${workSans.variable} ${spaceMono.variable}`}
    >
      <body className="bg-surface text-on-surface font-body min-h-screen selection:bg-primary selection:text-on-primary">
        {children}
      </body>
    </html>
  );
}
