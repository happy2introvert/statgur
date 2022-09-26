import styles from './MainLogo.module.scss'
import dynamic from 'next/dynamic'

const Image = dynamic(() => import('next/image'))

function MenuLogoSvg() {
  return (
    <div className={styles.menulogo}>
      <Image
        src='/static/menuLogo.svg'
        alt='StatGur Logo'
        layout='fill'
        objectFit='fill'
      />
    </div>
  )
}

export default MenuLogoSvg
