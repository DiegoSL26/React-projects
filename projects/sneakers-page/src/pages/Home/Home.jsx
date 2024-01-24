import './Home.css'
import { VideoSection } from '../../components/videoSection/VideoSection'
import { ImageContainer } from '../../components/imageSection/ImageSection'
import { UseScroll } from '../../hooks/useScroll'
import { Header } from '../../components/mainHeader/MainHeader'
import { HeaderDropdownMenu } from '../../components/headerDropdownMenu/HeaderDropdownMenu'
import { useHover } from '../../hooks/useHover'
import { getSneakers } from '../../services/getSneakers'

function Home () {
  const { isAtTop, sliderRef, sliderDiv, videoRef, handleScrollClickBottom, handleScroll } = UseScroll()
  const sneakers = getSneakers()
  const { isHovered, hoverRef, hoverDropDownRef } = useHover()

  return (
    <section>
      <header className='headerContainer'>
        <Header isAtTop={isAtTop} isHovered={isHovered} hoverRef={hoverRef} />
        <HeaderDropdownMenu sneakers={sneakers} isHovered={isHovered} hoverDropDownRef={hoverDropDownRef} />
      </header>

      <div className='slider' onScroll={handleScroll} ref={sliderDiv}>
        <div ref={videoRef}>
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
    </section>
  )
}

export default Home
