import './Home.css'
import { VideoSection } from '../components/videoSection/VideoSection'
import { ImageContainer } from '../components/imageSection/ImageSection'
import { UseScroll } from '../hooks/useScroll'

function Home () {
  const { sliderRef, videoRef, handleScrollClickBottom, handleScroll } = UseScroll()

  return (
    <main>

      <div className='slider' onScroll={handleScroll}>
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
    </main>
  )
}

export default Home
