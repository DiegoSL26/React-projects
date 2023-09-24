import { useState, useRef } from 'react'

export const useDropdownScroll = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const dropdownScrollRef = [
    useRef(),
    useRef(),
    useRef(),
    useRef()
  ]

  const handleRightClick = () => {
    if (currentPage === dropdownScrollRef.length - 1) return

    setCurrentPage(currentPage + 1)
    dropdownScrollRef[currentPage + 1].current.scrollIntoView({ behavior: 'smooth' })
    console.log(currentPage)
  }

  const handleLeftClick = () => {
    if (currentPage === 0) return

    setCurrentPage(currentPage - 1)
    dropdownScrollRef[currentPage - 1].current.scrollIntoView({ behavior: 'smooth' })
    console.log(currentPage)
  }

  return { dropdownScrollRef, handleRightClick, handleLeftClick }
}
