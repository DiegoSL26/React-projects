import './App.css'
import { Movies } from './components/Movies'

function App () {
  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new FormData(event.target))
    console.log(fields.query)
  }

  return (
    <div className='page'>
      <header className='headerBar'>
        <h1 className='pageTittle'>Movie searcher</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' placeholder='Avengers, Star-wars, Fast...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main className='mainPage'>
        <Movies />
      </main>

    </div>
  )
}

export default App
