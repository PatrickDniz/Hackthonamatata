import SectionAboutUs from "@/components/SectionAboutUs";
import styles from "./page.module.css";
import getCampaigns from "@/api/getCampaigns";
import SectionCarouselCards from "@/components/SectionCarouselCards";

export default async function Home() {
  const campaigns = await getCampaigns();
  const dataCampaign = {
    title: "Ajude em nossas Campanhas!",
    link: "/campanhas",
    cards: campaigns,
    type: "campaign"
  }
  return (
    <main>
      <SectionAboutUs />
      <SectionCarouselCards data={dataCampaign} />
    </main>
  );
}
