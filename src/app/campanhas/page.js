import getCampaigns from "@/api/getCampaigns";
import ListCampaign from "@/components/ListCampaign";
import Title from "@/components/Title";

export default async function Campanhas() {
    const campaigns = await getCampaigns();
   
    return ( 
        <main>
            <Title data={"Campanhas"} />
            <ListCampaign data={campaigns} />
        </main>
    );
}
  