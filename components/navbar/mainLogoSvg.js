import dynamic from 'next/dynamic'
import styles from './MainLogo.module.scss'

const Image = dynamic(() => import('next/image'))

function LogoSvg() {
  return (
    <div className={styles.logo}>
      <Image
        src='/static/mainlogo.svg'
        alt='StatGur Logo'
        layout='fill'
        objectFit='contain'
      />
    </div>
  )
}

export default LogoSvg
