import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <div>teste</div>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
