import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const ErrorMessage = dynamic(() => import('../error/errorMessage'))

const Articles = dynamic(() => import('./articles'), {
  suspense: true,
})
const CardTemplate = dynamic(() => import('./card/CardTemplate'), {
  suspense: true,
})

function ArticlesList({ distance, time }) {
  const cardContent = [
    {
      cardTitle: 'Auto',
      dayPrice: distance ? distance * 21 : 21,
      nightPrice: distance ? distance * 26 : 26,
      distance: distance ? distance : 1,
      time: time ? time : 5,
    },
    {
      cardTitle: 'Bike',
      dayPrice: distance ? distance * 15 : 15,
      nightPrice: distance ? distance * 20 : 20,
      distance: distance ? distance : 1,
      time: time ? time : 5,
    },
    {
      cardTitle: 'Mini',
      dayPrice: distance ? distance * 30 : 30,
      nightPrice: distance ? distance * 40 : 40,
      distance: distance ? distance : 1,
      time: time ? time : 5,
    },
    {
      cardTitle: 'Sweden',
      dayPrice: distance ? distance * 35 : 35,
      nightPrice: distance ? distance * 45 : 45,
      distance: distance ? distance : 1,
      time: time ? time : 5,
    },
    {
      cardTitle: 'SUV',
      dayPrice: distance ? distance * 50 : 50,
      nightPrice: distance ? distance * 55 : 55,
      distance: distance ? distance : 1,
      time: time ? time : 5,
    },
  ]

  return (
    <Suspense
      fallback={
        <div style={{ alignItems: 'stretch', backgroundColor: 'white' }}></div>
      }
    >
      <Articles>
        {[...new Array(5)].map((_, i) => {
          return (
            <Suspense
              key={i}
              fallback={
                <div
                  style={{ alignItems: 'stretch', backgroundColor: 'white' }}
                ></div>
              }
            >
              <CardTemplate index={i} cardContent={cardContent} />
            </Suspense>
          )
        })}
      </Articles>
    </Suspense>
  )
}

export default ArticlesList
