import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({  weight: ['400', '700'], subsets: ["latin"] });

export default function RootLayout({ children }) {
 
  return (
    <html lang="pt-BR">
      <body className={lato.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
