import './HeaderDropdownMenu.css'
import { useEffect } from 'react'

export function HeaderDropdownMenu ({ sneakers, isHovered, hoverDropDownRef }) {
  useEffect(() => {
    if (isHovered) {
      hoverDropDownRef.current.style.maxHeight = '500px'
    } else {
      hoverDropDownRef.current.style.maxHeight = '0px'
    }
  }, [isHovered])

  return (
    <div ref={hoverDropDownRef} className='showDropDownContainer'>
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
