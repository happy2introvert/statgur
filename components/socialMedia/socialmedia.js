import socialmediaStyles from './SocialMedia.module.scss'
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
} from 'next-share'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const SocialMediaImage = dynamic(() => import('./socialmediaImage'), {
  suspense: true,
})

export default function Socialmedia() {
  return (
    <div>
      <ul className={socialmediaStyles.share}>
        <li>
          <div className={socialmediaStyles.social_link}>
            <Suspense
              fallback={
                <div
                  style={{
                    alignItems: 'stretch',
                    backgroundColor: 'white',
                  }}
                ></div>
              }
            >
              <SocialMediaImage />
            </Suspense>
            <div className={socialmediaStyles.nav_label}>
              <span>
                <FacebookShareButton
                  url={'http://www.statgur.com'}
                  quote={'StatGur - Checkout best Cab Fare '}
                  hashtag='#StatGur'
                >
                  <FacebookIcon size={36} />
                </FacebookShareButton>
              </span>
              <span>
                {' '}
                <WhatsappShareButton
                  url={'http://www.statgur.com'}
                  title={'StatGur - Checkout best Cab Fare'}
                  separator=':: '
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
