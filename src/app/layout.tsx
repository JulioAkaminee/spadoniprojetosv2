import "./globals.css";

import { DM_Sans, Playfair_Display } from "next/font/google";

export const metadata = {
  title: "Spadoni Projetos",
  description:
    "A Spadoni Projetos é um escritório de engenharia e arquitetura especializado em projetos de vedações, arquitetura, engenharia civil, kits hidráulicos e contrapiso. Fundada pelo Engº Marcos Vinícius e pela Arqª Flávia Leandro, a empresa atua no desenvolvimento de soluções técnicas e arquitetônicas para obras residenciais, comerciais e industriais, unindo experiência, qualidade, segurança e eficiência em cada projeto.",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${dmSans.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
