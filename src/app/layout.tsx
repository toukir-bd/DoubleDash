import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Accountity",
  description: "Accountity- Accounting Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./img/favicon.svg"/>
      </head>
      <body className={`antialiased`}>
        <main className="px-5 flex justify-center min-h-screen bg-linear-90 from-[#FFB800]/[.45] to-[#0047FF]/[.35]">
          {children}
        </main>
      </body>
    </html>
  );
}
