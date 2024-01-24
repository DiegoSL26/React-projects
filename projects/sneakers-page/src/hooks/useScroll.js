import { useState, useRef } from 'react'
import { useOnScreen } from './useOnScreen'

export const UseScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const sliderRef = useRef(null)
  const [isAtTop, setIsAtTop] = useState(0)

  const sliderDiv = useRef(null)
  const sliderObserver = useOnScreen(sliderDiv)

  const videoRef = useRef(null)

  const handleScrollClickBottom = () => {
    if (sliderRef.current) {
      setIsScrolling(true)
      sliderRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    if (videoRef.current.getBoundingClientRect().top === 0) {
      setIsAtTop(0)
    } else {
      if (sliderObserver) {
        setIsAtTop(1)
      } else {
        setIsAtTop(2)
      }
    }

    if (isScrolling) {
      setIsScrolling(false)
    }
  }

  return { isAtTop, sliderRef, sliderDiv, videoRef, handleScrollClickBottom, handleScroll }
}
