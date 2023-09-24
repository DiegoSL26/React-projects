import './HeaderDropdownMenu.css'
import { useEffect } from 'react'
import { SneakerDropdownPage } from '../sneakerDropdownPage/SneakerDropdownPage'
import { useDropdownScroll } from '../../hooks/useDropdownScroll'

export function HeaderDropdownMenu ({ sneakers, isHovered, hoverDropDownRef }) {
  // TODO 5: Add a final button in the 16 position that says 'Ir al catálogo completo' and links to the catalog page

  const { dropdownScrollRef, handleRightClick, handleLeftClick, leftArrowRef, rightArrowRef } = useDropdownScroll()

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
      <div ref={leftArrowRef} className='leftArrowButtonContainer'>
        <img className='downArrow' onClick={handleLeftClick} src='https://cdn-icons-png.flaticon.com/512/2985/2985149.png' />
      </div>

      <div className='sneakerSlider'>
        <div ref={dropdownScrollRef[0]} className='sneakerDropdownContainer'>
          <SneakerDropdownPage sneakers={sneakers.slice(0, 4)} isLastItem={false} />
        </div>

        <div ref={dropdownScrollRef[1]} className='sneakerDropdownContainer'>
          <SneakerDropdownPage sneakers={sneakers.slice(4, 8)} isLastItem={false} />
        </div>

        <div ref={dropdownScrollRef[2]} className='sneakerDropdownContainer'>
          <SneakerDropdownPage sneakers={sneakers.slice(8, 12)} isLastItem={false} />
        </div>

        <div ref={dropdownScrollRef[3]} className='sneakerDropdownContainer'>
          <SneakerDropdownPage sneakers={sneakers.slice(12, 15)} isLastItem />
        </div>

      </div>

      <div ref={rightArrowRef} className='rightArrowButtonContainer'>
        <img className='downArrow' onClick={handleRightClick} src='https://cdn-icons-png.flaticon.com/512/2985/2985149.png' />
      </div>
    </div>
  )
}
