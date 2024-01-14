import './Home.css'
import { Header } from '../components/header/Header'
import { VideoSection } from '../components/videoSection/VideoSection'
import { ImageContainer } from '../components/imageSection/ImageSection'
import { UseScroll } from '../hooks/useScroll'
import { HeaderDropdownMenu } from '../components/headerDropdownMenu/HeaderDropdownMenu'
import { getSneakers } from '../services/getSneakers'
import { useHover } from '../hooks/useHover'

function Home () {
  const { isAtTop, sliderRef, sliderDiv, handleScrollClickBottom, handleScroll } = UseScroll()
  const { isHovered, hoverRef, hoverDropDownRef } = useHover()
  const sneakers = getSneakers()

  return (
    <main>
      <header className='headerContainer'>
        <Header isAtTop={isAtTop} isHovered={isHovered} hoverRef={hoverRef} />
        <HeaderDropdownMenu sneakers={sneakers} isHovered={isHovered} hoverDropDownRef={hoverDropDownRef} />
      </header>

      <div className='slider' onScroll={handleScroll} ref={sliderDiv}>
        <div>
          <VideoSection handleScrollClick={handleScrollClickBottom} />
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

      <div className='backdropBlur' />
    </main>
  )
}

export default Home
