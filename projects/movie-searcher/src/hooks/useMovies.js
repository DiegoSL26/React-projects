import { searchMovies } from '../services/movies'
import { useRef, useState, useMemo, useCallback } from 'react'

export function useMovies ({ query, sort }) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef(query)

  const getMovies = useCallback(async ({ query }) => {
    if (previousSearch.current === query) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = query
      const newMovies = await searchMovies({ query })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, error, loading }
}
