import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Endolipo | Menos gordura localizada. Mais você.",
  description: "Tecnologia de precisão para reduzir gordura localizada, estimular o colágeno e valorizar a sua melhor versão.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
