import loadingstyle from './LoadingScreen.module.scss'

const LoadingScreen = () => {
  return (
    <div className={loadingstyle.loading_screen}>
      <div className={loadingstyle.dot}></div>
      <div className={loadingstyle.dot}></div>
      <div className={loadingstyle.dot}></div>
      <div className={loadingstyle.dot}></div>
      <div className={loadingstyle.dot}></div>
    </div>
  )
}

export default LoadingScreen
