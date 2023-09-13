import { useMovies } from '../hooks/useMovies'

function MoviesListResult ({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={`${movie.Title} poster`} />
        </li>
      ))}
    </ul>
  )
}

function EmptyMoviesList () {
  return (
    <p>No se encontraron películas para esta búsqueda</p>
  )
}

export function Movies () {
  const { movies } = useMovies()
  const hasMovies = movies.length > 0

  return (
    hasMovies
      ? <MoviesListResult movies={movies} />
      : <EmptyMoviesList />
  )
}
