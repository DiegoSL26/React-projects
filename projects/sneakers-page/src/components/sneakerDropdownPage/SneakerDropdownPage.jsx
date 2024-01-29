import { Link } from 'react-router-dom'
import './SneakerDropdownPage.css'

export function SneakerDropdownPage ({ sneakers, isLastItem }) {
  return (
    <ul className='sneakerDropdownList'>
      {sneakers.map(sneaker => (
        <li key={sneaker.id} className='sneakerInfo'>
          <Link to='/detail'>
            <img src={sneaker.image} alt={sneaker.name} />
            <span>{sneaker.title}</span>
          </Link>
        </li>
      ))}
      {isLastItem &&
        <li className='catalogueInfo'>
          <Link to='/catalogue'>
            <img src='https://cdn-icons-png.flaticon.com/512/12000/12000614.png' alt='Go to the catalogue img' />
            <span>Ir al catálogo</span>
          </Link>
        </li>}
    </ul>
  )
}
