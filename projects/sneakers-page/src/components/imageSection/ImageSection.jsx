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
          <li><MainButton buttonText='Ver detalle' /></li>
          <li><MainButton buttonText='Agregar al carrito' /></li>
        </ul>
      </footer>
    </section>
  )
}
