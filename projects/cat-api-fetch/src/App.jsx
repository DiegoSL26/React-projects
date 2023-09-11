import { useEffect, useState } from 'react'
import { CAT_IMAGE_URL } from './Constants'
import './App.css'
import { getRandomFact } from './services/facts'

function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  useEffect(() => {
    if (!fact) return
    const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')
    const concatenatedUrl = `${CAT_IMAGE_URL}${firstThreeWords}`
    setImageUrl(concatenatedUrl)
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <>
      <main>
        <h1>Cat Project</h1>
        <button onClick={handleClick}>Get new fact</button>
        <section>
          {fact && <p>{fact}</p>}
          {imageUrl && <img src={imageUrl} alt='image extracted using three first words from first api' />}
        </section>
      </main>
    </>
  )
}

export default App
