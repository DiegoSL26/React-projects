import './SneakerDropdownPage.css'

export function SneakerDropdownPage ({ sneakers }) {
  return (
    <ul className='sneakerDropdownList'>
      {sneakers.map(sneaker => (
        <li key={sneaker.id} className='sneakerInfo'>
          <img src={sneaker.image} alt={sneaker.name} />
          <a href='#'>{sneaker.title}</a>
        </li>
      ))}
    </ul>
  )
}
