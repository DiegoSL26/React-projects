import './App.css'
import { Header } from './components/header/Header'
import { VideoSection } from './components/videoSection/VideoSection'
import { ImageContainer } from './components/imageSection/ImageSection'
import { UseScroll } from './hooks/useScroll'
import { HeaderDropdownMenu } from './components/headerDropdownMenu/HeaderDropdownMenu'
import { getSneakers } from './services/getSneakers'

function App () {
  const { isAtTop, sliderRef, sliderDiv, handleScrollClick, handleScroll } = UseScroll()
  const sneakers = getSneakers()

  return (
    <main>

      <div className='headerContainer'>
        <Header isAtTop={isAtTop} />
        <HeaderDropdownMenu sneakers={sneakers} />
      </div>

      <div className='slider' onScroll={handleScroll} ref={sliderDiv}>
        <div>
          <VideoSection handleScrollClick={handleScrollClick} />
        </div>
        <div ref={sliderRef}>
          <ImageContainer imageRoute='./src/assets/bad-bunny-brown-forum.jpg' />
        </div>
        <div>
          <ImageContainer imageRoute='./src/assets/jordan1.jpg' />
        </div>
        <div>
          <ImageContainer imageRoute='./src/assets/stan-smith.jpg' />
        </div>
      </div>
    </main>
  )
}

export default App
