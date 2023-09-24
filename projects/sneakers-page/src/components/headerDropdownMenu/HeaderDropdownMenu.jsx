import './HeaderDropdownMenu.css'
import { useEffect } from 'react'
import { SneakerDropdownPage } from '../sneakerDropdownPage/SneakerDropdownPage'
import { useDropdownScroll } from '../../hooks/useDropdownScroll'

export function HeaderDropdownMenu ({ sneakers, isHovered, hoverDropDownRef }) {
  // TODO 1: Add right arrow button to scroll to the next four sneakers in the list
  // TODO 2: Add left arrow button to scroll to the previous four sneakers in the list
  // TODO 3: Add a condition to disable the left arrow button when the first four sneakers are being shown
  // TODO 4: Add a condition to disable the right arrow button when the last four sneakers are being shown (the limit will be 15)
  // TODO 5: Add a final button in the 16 position that says 'Ir al catálogo completo' and links to the catalog page

  const { dropdownScrollRef, handleRightClick, handleLeftClick } = useDropdownScroll()

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
    <div ref={hoverDropDownRef} className='showDropdownContainer'>
      <div className='rightArrowButtonContainer'>
        <button onClick={handleLeftClick}>Izquierda</button>
      </div>

      <div className='sneakerSlider'>
        <div ref={dropdownScrollRef[0]} className='sneakerDropdownContainer'>
          <SneakerDropdownPage sneakers={sneakers.slice(0, 4)} />
        </div>

        <div ref={dropdownScrollRef[1]} className='sneakerDropdownContainer'>
          <SneakerDropdownPage sneakers={sneakers.slice(4, 8)} />
        </div>

        <div ref={dropdownScrollRef[2]} className='sneakerDropdownContainer'>
          <SneakerDropdownPage sneakers={sneakers.slice(8, 12)} />
        </div>

        <div ref={dropdownScrollRef[3]} className='sneakerDropdownContainer'>
          <SneakerDropdownPage sneakers={sneakers.slice(12, 16)} />
        </div>

      </div>

      <div className='leftArrowButtonContainer'>
        <button onClick={handleRightClick}>Derecha</button>
      </div>
    </div>
  )
}
