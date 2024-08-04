import getCampaigns from "@/api/getCampaigns"
import ListCampaign from "@/components/ListCampaign"
import styles from "@/app/campanhas/page.module.css"
import RegionFilter from "@/components/RegionFilter"

export default async function Campanhas(context) {
    const campaigns = await getCampaigns()
    const { searchParams } = context

    const hasRegion = Boolean(searchParams.regiao)
    const filteredCampaigns = hasRegion
        ? campaigns.filter(campaign => campaign.estate === searchParams.regiao)
        : campaigns

    return (
        <main>
            <section className={styles.top}>
                <h1 className={styles.headline}>Campanhas ativas</h1>
                <p className={styles.text}>Quem mais precisa de você</p>
                <RegionFilter campaigns={campaigns} />
            </section>
            <ListCampaign data={filteredCampaigns} />
        </main>
    );
}