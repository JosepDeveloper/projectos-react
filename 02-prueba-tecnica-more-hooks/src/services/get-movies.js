import { API_URL, OPTIONS_MOVIES } from '../const'

const getMovies = async ({ search }) => {
  if (!search) {
    return null
  }

  const urlToFetch = `${API_URL}?query=${search.trim()}`

  const response = await fetch(urlToFetch, OPTIONS_MOVIES)

  const data = await response.json()
  const { titleResults } = data
  const { results } = titleResults

  const mapMovies = results.map((movie) => {
    return {
      title: movie.titleNameText,
      year: movie?.titleReleaseText || 'Desconocido',
      poster:
        movie?.titlePosterImageModel.url ||
        'https://media.istockphoto.com/id/1500807425/vector/image-not-found-icon-vector-design.jpg?s=612x612&w=0&k=20&c=SF3EoL0zSi3XUwFzduMo3xdJFEk8V5IUsGqRocgPEtU='
    }
  })

  return mapMovies
}

export { getMovies }
