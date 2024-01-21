import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Catalogue from './pages/Catalogue'
import SneakerDetail from './pages/SneakerDetail'
import { Header } from './components/header/Header'
import { HeaderDropdownMenu } from './components/headerDropdownMenu/HeaderDropdownMenu'
import { useHover } from './hooks/useHover'
import { getSneakers } from './services/getSneakers'
import { UseScroll } from './hooks/useScroll'

const App = () => {
  const sneakers = getSneakers()
  const { isHovered, hoverRef, hoverDropDownRef } = useHover()
  const { isAtTop } = UseScroll()

  return (
    <BrowserRouter>
      <header className='headerContainer'>
        <Header isAtTop={isAtTop} isHovered={isHovered} hoverRef={hoverRef} />
        <HeaderDropdownMenu sneakers={sneakers} isHovered={isHovered} hoverDropDownRef={hoverDropDownRef} />
      </header>

      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/catalogue' Component={Catalogue} />
        <Route path='/detail' Component={SneakerDetail} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
