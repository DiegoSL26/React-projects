import './App.css'
import { useCallback, useState } from 'react'
import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { query, setQuery, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ query, sort })

  const debouncedGetMovies = useCallback(
    debounce(query => {
      getMovies({ query })
    }, 500), [movies])

  const handleChange = (event) => {
    const newQuery = event.target.value
    setQuery(newQuery)
    debouncedGetMovies(newQuery)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!error) {
      getMovies({ query }
      )
    }
  }

  return (
    <div className='page'>
      <header>
        <h1 className='title'>Movie searcher</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' className='movieInput' placeholder='Avengers, Star-wars, Fast...' />
          <div className='sortCheckbox'>
            <input type='checkbox' onChange={handleSort} checked={sort} />
            <p>Sort alphabetically</p>
          </div>
          <button className='searchButton' onClick={handleSubmit}>Search</button>
        </form>

      </header>
      <hr />
      <main className='mainPage'>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {loading ? <p>Cargando...</p> : <Movies moviesList={movies} />}
      </main>

    </div>
  )
}

export default App
