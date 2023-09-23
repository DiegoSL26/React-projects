import { useState, useRef, useEffect } from 'react'

export function useHover () {
  const [isHovered, setIsHovered] = useState(false)
  const hoverNavRef = useRef(null)
  const hoverDropDownRef = useRef(null)

  useEffect(() => {
    const navItem = hoverNavRef.current
    const dropDownItem = hoverDropDownRef.current
    navItem.addEventListener('mouseover', () => setIsHovered(true))
    navItem.addEventListener('mouseout', () => setIsHovered(false))
    dropDownItem.addEventListener('mouseover', () => setIsHovered(true))
    dropDownItem.addEventListener('mouseout', () => setIsHovered(false))

    return () => {
      navItem.removeEventListener('mouseover', () => setIsHovered(true))
      navItem.removeEventListener('mouseout', () => setIsHovered(false))
      dropDownItem.removeEventListener('mouseover', () => setIsHovered(true))
      dropDownItem.removeEventListener('mouseout', () => setIsHovered(false))
    }
  }, [isHovered])

  return { isHovered, hoverRef: hoverNavRef, hoverDropDownRef }
}
