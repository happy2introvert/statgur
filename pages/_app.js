import '../styles/globals.css'
import { Fragment, useEffect, useState, Suspense } from 'react'
import Script from 'next/script'
import dynamic from 'next/dynamic'

const TopProgressBar = dynamic(
  () => import('../components/progressbar/topProgressBar'),
  { ssr: false }
)

const Navbar = dynamic(() => import('../components/navbar/navbar'), {
  suspense: true,
})

const Socialmedia = dynamic(
  () => import('../components/socialMedia/socialmedia'),
  {
    suspense: true,
  }
)

const LoadingScreen = dynamic(() =>
  import('../components/loadingScreen/loadingScreen')
)

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
  }, [])

  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy='lazyOnload' id='google-analytic'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
      </Script>
      {loading ? (
        <Fragment>
          <header>
            <Suspense
              fallback={
                <div
                  style={{ alignItems: 'stretch', backgroundColor: 'white' }}
                ></div>
              }
            >
              <Navbar />
            </Suspense>
          </header>
          <div>
            <TopProgressBar />
            <Component {...pageProps} />
            <div>
              <Suspense
                fallback={
                  <div
                    style={{ alignItems: 'stretch', backgroundColor: 'white' }}
                  ></div>
                }
              >
                <Socialmedia />
              </Suspense>
            </div>
          </div>
        </Fragment>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}

export default MyApp
