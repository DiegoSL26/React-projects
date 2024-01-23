import { useState, useRef } from 'react'

export const UseScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const sliderRef = useRef(null)
  const [isAtTop, setIsAtTop] = useState(true)
  const videoRef = useRef(null)

  const handleScrollClickBottom = () => {
    if (sliderRef.current) {
      setIsScrolling(true)
      sliderRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    if (videoRef.current.getBoundingClientRect().top === 0) {
      setIsAtTop(true)
    } else {
      setIsAtTop(false)
    }
    if (isScrolling) {
      setIsScrolling(false)
    }
  }

  return { isAtTop, sliderRef, videoRef, handleScrollClickBottom, handleScroll }
}
