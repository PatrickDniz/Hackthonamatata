import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({  weight: ['400', '700'], subsets: ["latin"] });

export const metadata = {
  title: 'A maior plataforma humanitária do Brasil - Braza',
  description: 'Ajude em campanhas, seja um voluntário ou disponibilize seu imóvel parado para auxiliar quem precisa. Sempre podemos ajudar com alguma coisa.',
  keywords: 'Braza, Voluntario, Voluntaria, Campanhas, Crises Climáticas',
  icons: {
    icon: ['/favicon/favicon.ico?v=4'],
    apple: ['/favicon/apple-touch-icon.png?v=4'],
    shortcut: ['/favicon/apple-touch-icon.png']
  }
}

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
