import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Card = dynamic(() => import('./card'), {
  suspense: true,
})

function CardTemplate({ index, cardContent }) {
  return (
    <Suspense
      fallback={
        <div style={{ alignItems: 'stretch', backgroundColor: 'white' }}></div>
      }
    >
      <Card key={index} index={index} cardContent={cardContent} />
    </Suspense>
  )
}

export default CardTemplate
