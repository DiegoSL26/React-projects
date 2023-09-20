import './header.css'

export function Header () {
  return (
    <header className='landingHeader'>
      <div className='logoContainer'>
        <img className='pageLogo' src='https://cdn.freebiesupply.com/images/large/2x/air-jordan-logo-png-transparent.png' alt='Jordan logo vector' />
      </div>
      <nav>
        <ul>
          <li><a href='#' />Modelos</li>
          <li><a href='#' />Hombre</li>
          <li><a href='#' />Mujer</li>
          <li><a href='#' />Niños</li>
        </ul>
      </nav>
      <nav className='rightNav'>
        <img className='navIcon' src='https://cdn-icons-png.flaticon.com/512/3144/3144456.png' alt='Shopping cart icon' />
        <img className='navIcon' src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png' alt='Login user icon' />
      </nav>
    </header>
  )
}
