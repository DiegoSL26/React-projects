import { useEffect, useRef } from 'react'
import './MainHeader.css'
import { Link } from 'react-router-dom'

export function Header ({ isAtTop, hoverRef, isHovered }) {
  const headerRef = useRef(null)

  useEffect(() => {
    if (isHovered) {
      headerRef.current.style.backgroundColor = 'black'
    } else {
      if (isAtTop === 0) {
        headerRef.current.style.backgroundColor = 'transparent'
        headerRef.current.style.borderBottom = '3px solid transparent'
      } else if (isAtTop === 1) {
        headerRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
        headerRef.current.style.borderBottom = '3px solid black'
      } else {
        headerRef.current.style.backgroundColor = 'black'
      }
    }
  }, [isAtTop, isHovered])

  return (
    <header className='landingHeader' ref={headerRef}>
      <div className='logoContainer'>
        <Link to='/'><img className='pageLogo' src='https://cdn.freebiesupply.com/images/large/2x/air-jordan-logo-png-transparent.png' alt='Jordan logo vector' /></Link>
      </div>
      <nav className='leftHeaderNav'>
        <ul>
          <li ref={hoverRef}><Link to='/catalogue'>Catálogo</Link></li>
          <li><Link to='/catalogue'>Hombre</Link></li>
          <li><Link to='/catalogue'>Mujer</Link></li>
          <li><Link to='/catalogue'>Niños</Link></li>
        </ul>
      </nav>
      <nav className='rightHeaderNav'>
        <img className='navIcon' src='https://cdn-icons-png.flaticon.com/512/3144/3144456.png' alt='Shopping cart icon' />
        <img className='navIcon' src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png' alt='Login user icon' />
      </nav>
    </header>
  )
}
