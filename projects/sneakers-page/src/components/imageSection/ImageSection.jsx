import './ImageSection.css'
import { MainButton } from '../mainButton/MainButton'

export function ImageContainer ({ imageRoute }) {
  return (
    <section className='imgContainer'>
      <div className='imgSection'>
        <img src={imageRoute} alt='Sneaker Img' />
      </div>
      <footer className='footerImgSection'>
        <MainButton buttonText='Ver detalle' route='/detail' />
      </footer>
    </section>
  )
}
