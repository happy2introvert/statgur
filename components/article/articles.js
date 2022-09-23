import articlesStyle from './Article.module.scss'
import { Children, useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import ButtonRight from './buttons/buttonRight'

const ButtonLeft = dynamic(() => import('./buttons/buttonLeft'), {
  suspense: true,
})

const MAX_VISIBILITY = 3

function Articles({ children }) {
  const [active, setActive] = useState(2)
  const count = Children.count(children)

  function changeActiveValueDecrese() {
    setActive((i) => i - 1)
  }

  function changeActiveValueIncrease() {
    setActive((i) => i + 1)
  }
  return (
    <div className={articlesStyle.articles}>
      <div className={articlesStyle.cardslist}>
        {Children.map(children, (child, i) => (
          <div
            className={articlesStyle.card_container}
            style={{
              '--active': i === active ? 1 : 0,
              '--offset': (active - i) / 3,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              opactiy: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            }}
          >
            {child}
          </div>
        ))}
      </div>
      <Suspense
        fallback={
          <div
            style={{ alignItems: 'stretch', backgroundColor: 'white' }}
          ></div>
        }
      >
        <ButtonLeft
          active={active}
          changeActiveValue={changeActiveValueDecrese}
        />
      </Suspense>
      <Suspense
        fallback={
          <div
            style={{ alignItems: 'stretch', backgroundColor: 'white' }}
          ></div>
        }
      >
        <ButtonRight
          active={active}
          changeActiveValue={changeActiveValueIncrease}
          count={count}
        />
      </Suspense>
    </div>
  )
}

export default Articles
