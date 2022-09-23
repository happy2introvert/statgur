import dynamic from 'next/dynamic'

const Image = dynamic(() => import('next/image'))

export default function ButtonRightImage() {
  return (
    <Image
      src='/static/rightLogo.svg'
      alt='MangCook Logo'
      layout='fill'
      objectFit='contain'
    />
  )
}
