import styles from '@/components/RegionFilter/style.module.css'
import Link from 'next/link'

export default function RegionFilter({ campaigns }) {
    const estates = campaigns.map(campaign => campaign.estate)

    return (
        <ul className={styles.ul}>
            {estates.map((estate, index) => (
                <li className={styles.li} key={index}>
                    <Link className={styles.link} href={`/campanhas?regiao=${estate}`}>{estate}</Link>
                </li>
            ))}
        </ul>
    )
}