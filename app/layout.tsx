import type { Metadata } from "next";
import './global.css'

export const metadata: Metadata = {
  title: "Rem",
  description: "Rem , Rating , Emotional , Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
          {children}
      </body>
    </html>
  );
}
