import Header from "@/src/components/header/header";
import Footer from "@/src/components/footer/footer";
import type { Metadata } from "next";
import './global.css'

export const metadata: Metadata = {
  title: "Rem",
  description: "Rating Emotinal Method",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
