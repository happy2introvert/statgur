import dynamic from 'next/dynamic'
import errorStyle from './ErrorMessage.module.scss'

const Link = dynamic(() => import('next/link'))

export default function ErrorMessage() {
  return (
    <div className={errorStyle.container}>
      <div className={errorStyle.error_box}>
        <div className={errorStyle.face}>
          <div className={errorStyle.eyeLeft}></div>
          <div className={errorStyle.eyeRight}></div>
          <div className={errorStyle.mouth_sad}></div>
        </div>
        <div className={errorStyle.shadow_move}></div>
        <div className={errorStyle.message}>
          <h1>Error!</h1>
          <p>{`oh no, something went wrong.`}</p>
        </div>
        <div className={errorStyle.buttonContainer}>
          <Link
            href={{
              pathname: '/',
            }}
          >
            <a>
              <button className={errorStyle.button_box}>
                <h1 className={errorStyle.redbutton}>try again</h1>
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
