import dynamic from 'next/dynamic'
import articlesStyle from '../Article.module.scss'
import { Suspense } from 'react'
const ButtonRightImage = dynamic(() => import('./buttonRightImage'), {
  suspense: true,
})

export default function ButtonRight({ active, changeActiveValue, count }) {
  return (
    <>
      {active < count - 1 && (
        <button
          className={articlesStyle.right}
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
              <ButtonRightImage />
            </Suspense>
          </div>
        </button>
      )}
    </>
  )
}
