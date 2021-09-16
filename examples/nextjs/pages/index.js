import styles from '../styles/Home.module.css'
import { ClutchBadge, getClutchReviewsData } from 'react-clutch-badge'

export default function Home({ clutchData }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ClutchBadge variant="smallLogo" {...clutchData} />
        <ClutchBadge variant="bigLogo" {...clutchData} />

        <ClutchBadge classNamePrefix="custom-small-clutch-badge" variant="smallLogo" {...clutchData} />
        <ClutchBadge classNamePrefix="custom-big-clutch-badge" variant="bigLogo" {...clutchData} />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      clutchData: await getClutchReviewsData({ clutchProfileHandle: 'testscenario' }),
    },
  }
}
