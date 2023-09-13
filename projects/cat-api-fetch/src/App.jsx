import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
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
