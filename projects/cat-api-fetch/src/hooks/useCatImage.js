import { useState, useEffect } from 'react'
import { CAT_IMAGE_URL } from '../Constants'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return
    const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')
    const concatenatedUrl = `${CAT_IMAGE_URL}${firstThreeWords}`
    setImageUrl(concatenatedUrl)
  }, [fact])

  return { imageUrl }
}
