import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Catalogue from './pages/Catalogue/Catalogue'
import SneakerDetail from './pages/SneakerDetail/SneakerDetail'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/catalogue' Component={Catalogue} />
        <Route path='/detail' Component={SneakerDetail} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
