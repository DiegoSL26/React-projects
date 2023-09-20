import './App.css'
import { Header } from './components/Header/Header'
import { VideoSection } from './components/videoSection/VideoSection'
import { ImageContainer } from './components/imageSection/ImageSection'
import { Arrow } from './components/arrow/Arrow'

function App () {
  return (
    <main>
      <Header />

      <div className='slider'>
        <div>
          <VideoSection />
        </div>
        <div>
          <ImageContainer imageRoute='./src/assets/bad-bunny-brown-forum.jpg' />
        </div>
        <div>
          <ImageContainer imageRoute='./src/assets/air1-ats.jpg' />
        </div>
        <div>
          <ImageContainer imageRoute='./src/assets/stan-smith.jpg' />
        </div>
      </div>

      <Arrow />
    </main>
  )
}

export default App
