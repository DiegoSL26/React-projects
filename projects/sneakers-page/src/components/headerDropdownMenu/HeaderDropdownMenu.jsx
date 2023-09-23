import './HeaderDropdownMenu.css'
import { useEffect, useState } from 'react'

export function HeaderDropdownMenu ({ sneakers, isHovered, hoverDropDownRef }) {
  const [sneakersIndex, setSneakersIndex] = useState(0)

  // TODO 1: Add right arrow button to scroll to the next four sneakers in the list
  // TODO 2: Add left arrow button to scroll to the previous four sneakers in the list
  // TODO 3: Add a condition to disable the left arrow button when the first four sneakers are being shown
  // TODO 4: Add a condition to disable the right arrow button when the last four sneakers are being shown (the limit will be 15)
  // TODO 5: Add a final button in the 16 position that says 'Ir al catálogo completo' and links to the catalog page

  const handleRightArrow = () => {
    sneakersIndex >= 15 ? setSneakersIndex(15) : setSneakersIndex(sneakersIndex + 4)
    console.log(sneakersIndex)
  }

  const handleLeftArrow = () => {
    sneakersIndex <= 3 ? setSneakersIndex(0) : setSneakersIndex(sneakersIndex - 4)
    console.log(sneakersIndex)
  }

  useEffect(() => {
    if (isHovered) {
      hoverDropDownRef.current.style.maxHeight = '500px'
      hoverDropDownRef.current.style.borderBottom = '2px solid #000'
    } else {
      hoverDropDownRef.current.style.maxHeight = '0px'
      hoverDropDownRef.current.style.borderBottom = 'none'
    }
  }, [isHovered])

  return (
    <div ref={hoverDropDownRef} className='showDropDownContainer'>
      <div className='arrowButtonContainer'>
        <button onClick={handleLeftArrow}>Izquierda</button>
      </div>

      <ul>
        {sneakers.slice(sneakersIndex, sneakersIndex + 4).map(sneaker => (
          <li key={sneaker.id} className='sneakerInfo'>
            <img src={sneaker.image} alt={sneaker.name} />
            <a href='#'>{sneaker.title}</a>

          </li>
        ))}
      </ul>

      <div className='arrowButtonContainer'>
        <button onClick={handleRightArrow}>Derecha</button>
      </div>
    </div>
  )
}
