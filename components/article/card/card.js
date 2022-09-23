import cardStyles from './Card.module.scss'
import { Suspense } from 'react'

import CardImage from './cardImage'

function Card({ index, cardContent }) {
  return (
    <div className={cardStyles.card}>
      <h2 className={cardStyles.cardTitle}>{cardContent[index].cardTitle}</h2>
      <Suspense
        fallback={
          <div
            style={{ alignItems: 'stretch', backgroundColor: 'white' }}
          ></div>
        }
      >
        <div className={cardStyles.cardContent}>
          <div className={cardStyles.centerImage}>
            <CardImage cardImage={`/static/ic_${index}.png`} />
          </div>
          <div className={cardStyles.cardInfo}>
            {' '}
            <div className={cardStyles.centerContent}>
              <div className={cardStyles.dayContent}>
                <p>Day</p>
                <p>Price:- {cardContent[index].dayPrice} Rs</p>
              </div>
              <div className={cardStyles.nightContent}>
                <p>Night</p>
                <p>Price:-{cardContent[index].nightPrice} Rs</p>
              </div>
            </div>
            <div className={cardStyles.distance}>
              <p>Distance :- {cardContent[index].distance} km </p>
              <p>Time :- {cardContent[index].time}mins </p>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default Card
