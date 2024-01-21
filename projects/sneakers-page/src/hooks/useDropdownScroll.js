import { useState, useRef, useEffect } from 'react'

export const useDropdownScroll = () => {
  const leftArrowRef = useRef()
  const rightArrowRef = useRef()
  const [currentPage, setCurrentPage] = useState(0)
  const dropdownScrollRef = [
    useRef(),
    useRef(),
    useRef(),
    useRef()
  ]

  useEffect(() => {
    if (currentPage === 0) {
      leftArrowRef.current.style.visibility = 'hidden'
    } else {
      leftArrowRef.current.style.visibility = 'visible'
    }
    if (currentPage === dropdownScrollRef.length - 1) {
      rightArrowRef.current.style.visibility = 'hidden'
    } else {
      rightArrowRef.current.style.visibility = 'visible'
    }
  }, [currentPage])

  const handleRightClick = () => {
    if (currentPage === dropdownScrollRef.length - 1) return

    setCurrentPage(currentPage + 1)
    dropdownScrollRef[currentPage + 1].current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleLeftClick = () => {
    if (currentPage === 0) return

    setCurrentPage(currentPage - 1)
    dropdownScrollRef[currentPage - 1].current.scrollIntoView({ behavior: 'smooth' })
  }

  return { dropdownScrollRef, handleRightClick, handleLeftClick, leftArrowRef, rightArrowRef }
}
