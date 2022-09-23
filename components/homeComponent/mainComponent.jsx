import dynamic from 'next/dynamic'
import styles from '../../styles/Home.module.css'

const MapContainer = dynamic(() => import('../mapComponent/mapComponent'), {
  ssr: false,
})

export default function MainComponent({ props }) {
  return (
    <main className={styles.main}>
      <MapContainer className={styles.homeMap}></MapContainer>
    </main>
  )
}
