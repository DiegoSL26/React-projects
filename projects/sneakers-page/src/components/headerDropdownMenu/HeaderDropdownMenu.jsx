import './HeaderDropdownMenu.css'

export function HeaderDropdownMenu ({ sneakers }) {
  return (
    <div className='dropDownContainer'>
      <ul>
        {sneakers.slice(0, 4).map(sneaker => (
          <li key={sneaker.id} className='sneakerInfo'>
            <img src={sneaker.image} alt={sneaker.name} />
            <a href='#'>{sneaker.title}</a>

          </li>
        ))}
      </ul>
    </div>
  )
}
