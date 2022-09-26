import navstyles from './Navbar.module.scss'
import { useEffect, useRef, useState, Suspense } from 'react'
import dynamic from 'next/dynamic'

const Link = dynamic(() => import('next/link'))

const LogoSvg = dynamic(() => import('./mainLogoSvg'), {
  suspense: true,
})
const MenuLogoSvg = dynamic(() => import('./menuLogoSvg'), {
  suspense: true,
})

function Navbar() {
  const [Height, setHeight] = useState('0px')

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
  }, [])

  const refOne = useRef(null)

  const handleClickOutside = () => {
    setHeight('0px')
  }

  function togglemenu() {
    if (Height == '0px') {
      setHeight('130px')
    } else {
      setHeight('0px')
    }
  }

  return (
    <div className={navstyles.container}>
      <div className={navstyles.navbar}>
        <Suspense
          fallback={
            <div
              style={{ alignItems: 'stretch', backgroundColor: 'white' }}
            ></div>
          }
        >
          <LogoSvg />
        </Suspense>
        <nav className={navstyles.navclass}>
          <ul
            className={navstyles.menuList}
            ref={refOne}
            style={{ height: Height }}
          >
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Articles</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Cab</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>AboutUs</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={navstyles.menu_icon} onClick={togglemenu}>
          <Suspense
            fallback={
              <div
                style={{ alignItems: 'stretch', backgroundColor: 'white' }}
              ></div>
            }
          >
            <MenuLogoSvg />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Navbar
