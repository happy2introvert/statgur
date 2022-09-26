import dynamic from 'next/dynamic'

const Image = dynamic(() => import('next/image'))

export default function SocialMediaImage() {
  return (
    <>
      {' '}
      <Image
        src='/static/emoji.png'
        alt='SocialMedia'
        layout='fill'
        objectFit='contain'
      ></Image>
    </>
  )
}
