import dynamic from 'next/dynamic'
import articlesStyle from '../Article.module.scss'
import { Suspense } from 'react'
const ButtonLeftImage = dynamic(() => import('./buttonLeftImage'), {
  suspense: true,
})

export default function ButtonLeft({ active, changeActiveValue }) {
  return (
    <>
      {active > 0 && (
        <button
          className={articlesStyle.left}
          onClick={changeActiveValue}
          aria-label='Like'
        >
          <div className={articlesStyle.logo}>
            <Suspense
              fallback={
                <div
                  style={{ alignItems: 'stretch', backgroundColor: 'white' }}
                ></div>
              }
            >
              <ButtonLeftImage />
            </Suspense>
          </div>
        </button>
      )}
    </>
  )
}
