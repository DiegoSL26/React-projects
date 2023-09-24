import './SneakerDropdownPage.css'

export function SneakerDropdownPage ({ sneakers, isLastItem }) {
  return (
    <ul className='sneakerDropdownList'>
      {sneakers.map(sneaker => (
        <li key={sneaker.id} className='sneakerInfo'>
          <img src={sneaker.image} alt={sneaker.name} />
          <a href='#'>{sneaker.title}</a>
        </li>
      ))}
      {isLastItem &&
        <li className='catalogueInfo'>
          <img src='https://cdn-icons-png.flaticon.com/512/983/983901.png' alt='Go to the catalogue img' />
          <a href='#'>Ir al catálogo</a>
        </li>}
    </ul>
  )
}
