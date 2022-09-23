import cardStyles from './Card.module.scss'
import dynamic from 'next/dynamic'

const Image = dynamic(() => import('next/image'))
const Link = dynamic(() => import('next/link'))

export default function CardImage({ index, recipeId, title, cardImage }) {
  return (
    <div className={cardStyles.heroImage}>
      <Image
        src={cardImage}
        layout='fill'
        objectFit='contain'
        alt='Photo of car'
      ></Image>
    </div>
  )
}
