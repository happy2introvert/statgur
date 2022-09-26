import dynamic from 'next/dynamic'
const Image = dynamic(() => import('next/image'))

export default function ButtonLeftImage() {
  return (
    <Image
      src='/static/leftLogo.svg'
      alt='StatGur Logo'
      layout='fill'
      objectFit='contain'
    />
  )
}
