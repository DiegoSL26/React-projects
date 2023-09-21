import './ImageSection.css'
import { MainButton } from '../mainButton/MainButton'

export function ImageContainer ({ imageRoute }) {
  return (
    <section className='imgContainer'>
      <div className='imgSection'>
        <img src={imageRoute} alt='Bad Bunny Forum image' />
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
