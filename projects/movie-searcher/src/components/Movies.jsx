function MoviesListResult ({ movies }) {
  return (
    <ul className='movies'>
      {movies.map(movie => (
        <li className='movie' key={movie.id}>
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

export function Movies ({ moviesList }) {
  const hasMovies = moviesList !== undefined

  return (
    hasMovies
      ? <MoviesListResult movies={moviesList} />
      : <EmptyMoviesList />
  )
}
