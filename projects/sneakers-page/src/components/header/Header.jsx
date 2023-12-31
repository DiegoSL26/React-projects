import { useEffect, useRef } from 'react'
import './header.css'

export function Header ({ isAtTop, hoverRef, isHovered }) {
  const headerRef = useRef(null)

  useEffect(() => {
    if (isHovered) {
      headerRef.current.style.backgroundColor = 'black'
    } else {
      if (!isAtTop) {
        headerRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
        headerRef.current.style.borderBottom = '3px solid black'
      } else {
        headerRef.current.style.backgroundColor = 'transparent'
        headerRef.current.style.borderBottom = '3px solid transparent'
      }
    }
  }, [isAtTop, isHovered])

  return (
    <header className='landingHeader' ref={headerRef}>
      <div className='logoContainer'>
        <img className='pageLogo' src='https://cdn.freebiesupply.com/images/large/2x/air-jordan-logo-png-transparent.png' alt='Jordan logo vector' />
      </div>
      <nav className='leftHeaderNav'>
        <ul>
          <li ref={hoverRef}><a href='#' />Catálogo</li>
          <li><a href='#' />Hombre</li>
          <li><a href='#' />Mujer</li>
          <li><a href='#' />Niños</li>
        </ul>
      </nav>
      <nav className='rightHeaderNav'>
        <img className='navIcon' src='https://cdn-icons-png.flaticon.com/512/3144/3144456.png' alt='Shopping cart icon' />
        <img className='navIcon' src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png' alt='Login user icon' />
      </nav>
    </header>
  )
}
