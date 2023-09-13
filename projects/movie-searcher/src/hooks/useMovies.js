import moviesList from '../mocks/moviesList.json'
// import emptyList from '../mocks/emptyList.json'

export function useMovies () {
  const movies = moviesList.Search
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
  return { movies: mappedMovies }
}
