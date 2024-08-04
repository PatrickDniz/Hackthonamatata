import getCampaignsItem from "@/api/getCampaignsItem";
import CampaignsPage from "@/components/CampaignsPage";

export default async function Campanha(context) {
  const { params } = context;
  const campaign = await getCampaignsItem(params.id);

  return <CampaignsPage data={campaign} />;
}
