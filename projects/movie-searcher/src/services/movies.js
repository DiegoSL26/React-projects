import { MOVIES_API_URL } from '../constants/constants'

export const searchMovies = async ({ query }) => {
  if (query === '') return

  try {
    const finalUrl = `${MOVIES_API_URL}${query}`
    const response = await fetch(finalUrl)
    const data = await response.json()

    const movies = data.Search
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
