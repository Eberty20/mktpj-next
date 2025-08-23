// app/layout.tsx

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "MKT PJ | Feira de Marketing",
  description: "Projeto para a Feira de Marketing da ETEC Polivalente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${dmSans.className} bg-gradient-to-br from-brand-dark via-brand-primary to-brand-accent`}>
        {children}
      </body>
    </html>
  );
}