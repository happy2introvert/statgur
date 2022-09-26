import dynamic from 'next/dynamic'

const Head = dynamic(() => import('next/head'))
export default function HeadComponent() {
  return (
    <Head>
      <title>StatGur — Cab fare</title>
      <meta
        name='description'
        content='content="Calculate your Taxi Fare in world with the latest  Taxi Rate for 2022 . Just enter start and destination and let us calculate your Taxi Fare."'
      />
      <meta name='keywords' content='Statgur, Car, Taxi,Fare'></meta>
      <meta name='robots' content='index, follow'></meta>
      <meta httpEquiv='Content-Type' content='text/html; charset = UTF-8' />
      <meta name='language' content='English'></meta>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0'
      ></meta>
      <meta name='author' content='Statgur'></meta>

      {/*<!-- Open Graph / Facebook -->*/}
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://statgur.com/' />
      <meta
        property='og:title'
        content='What is statgur? Instant cab fare records'
      />
      <meta
        property='og:description'
        content='Statgur is ultimate record guide to predict cab fare in your locality.'
      />
      <meta
        property='og:image'
        content='https://statgur.com/static/socialBanner.png'
      />

      {/*<!-- Twitter -->*/}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://statgur.com/' />
      <meta
        property='twitter:title'
        content='What is statgur? Instant cab fare records'
      />
      <meta
        property='twitter:description'
        content='Statgur is ultimate record guide to predict cab fare in your locality.'
      />
      <meta
        property='twitter:image'
        content='https://statgur.com/static/socialBanner.png'
      />

      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
