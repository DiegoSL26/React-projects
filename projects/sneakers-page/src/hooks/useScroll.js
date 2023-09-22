import { useState, useRef } from 'react'

export const UseScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const sliderRef = useRef(null)
  const sliderDiv = useRef(null)
  const [isAtTop, setIsAtTop] = useState(true)

  const handleScrollClickBottom = () => {
    if (sliderRef.current) {
      setIsScrolling(true)
      sliderRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    if (sliderDiv.current.scrollTop < 500) {
      setIsAtTop(true)
    } else {
      setIsAtTop(false)
    }
    if (isScrolling) {
      setIsScrolling(false)
    }
  }

  return { isAtTop, sliderRef, sliderDiv, handleScrollClickBottom, handleScroll }
}
