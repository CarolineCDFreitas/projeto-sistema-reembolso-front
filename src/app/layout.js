import { Inter } from "next/font/google";
import "./globalstyle.css";

export const metadata = {
  title: "Portal SISPAR",
  description: "Sistema de Emissão de Boletos e Parcelamentos",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
