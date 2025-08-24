import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import BackToTopButton from "../components/ui/BackToTopButton"; // 1. Importa o novo componente
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
    // 2. Adiciona a classe para rolagem suave
    <html lang="pt-br" className="!scroll-smooth">
      <body className={`${dmSans.className} bg-gradient-to-br from-brand-dark via-brand-primary to-brand-accent`}>
        {children}
        {/* 3. Adiciona o componente do botão antes de fechar o body */}
        <BackToTopButton />
      </body>
    </html>
  );
}