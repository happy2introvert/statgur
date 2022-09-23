import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'

const HeadComponent = dynamic(() =>
  import('../components/homeComponent/headComponent')
)

const MainComponent = dynamic(() =>
  import('../components/homeComponent/mainComponent')
)

export default function Home(props) {
  return (
    <div className={styles.container}>
      <HeadComponent />
      <MainComponent props={props} />
    </div>
  )
}
