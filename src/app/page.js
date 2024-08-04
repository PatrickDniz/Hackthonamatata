import SectionAboutUs from "@/components/SectionAboutUs";
import styles from "./page.module.css";
import getCampaigns from "@/api/getCampaigns";
import SectionCarouselCards from "@/components/SectionCarouselCards";
import SectionPartners from "@/components/SectionPartners";
import getPartnerts from "@/api/getPartnerts";
import SectionHero from "@/components/SectionHero";
import SectionNews from "@/components/SectionNews";
import getNews from "@/api/getNews";

export default async function Home() {
  const campaigns = await getCampaigns();
  const partners = await getPartnerts();
  const news = await getNews();
  
  const dataCampaign = {
    title: "Ajude em <strong>nossas Campanhas!</strong>",
    subTitle: "Sua ajuda é essencial para transformar vidas! Participe das nossas campanhas e contribua para um futuro melhor. Juntos, podemos fazer a diferença. Doe agora e faça parte dessa mudança!",
    link: "/campanhas",
    cards: campaigns,
    type: "campaign"
  }
  const dataNews = {
    title: "Ultimas notícias",
    subTitle: "Fique informado sobre as crises climáticas mais recentes. Acompanhe nossos alertas e atualizações para entender o impacto global e como você pode ajudar. Esteja sempre atualizado e faça a diferença!",
    link: "/noticias",
    cards: news,
    type: "news" 
  }
  return (
    <main>
      <SectionHero />
      <SectionPartners data={partners} />
      <SectionAboutUs />
      <SectionCarouselCards data={dataCampaign} />
      <SectionNews data={dataNews} />
    </main>
  );
}
