import './ImageSection.css'
import { MainButton } from '../mainButton/MainButton'

export function ImageContainer ({ imageRoute }) {
  return (
    <section className='imgContainer'>
      <div className='imgSection'>
        <img src={imageRoute} alt='Sneaker Img' />
      </div>
      <footer className='footerImgSection'>
        <ul>
          <li><MainButton buttonText='Ver detalle' route='/detail' /></li>
        </ul>
      </footer>
    </section>
  )
}
