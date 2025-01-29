import { useRef } from 'react'
import { useState } from 'react'
import { getMovies } from '../services/get-movies'
import { useCallback } from 'react'
import { useEffect } from 'react'

const useMovies = () => {
  const previousSearch = useRef('')
  const [movies, setMovies] = useState(null)
  const [error, serError] = useState(null)
  const [loading, setLoading] = useState(false)

  const updateMovies = useCallback(({ search }) => {
    const trimmedSearch = search.toLowerCase().trim()
    const previousSearchTrimmed = previousSearch.current.toLowerCase().trim()

    if (trimmedSearch === previousSearchTrimmed) {
      return
    }

    setLoading(true)
    getMovies({ search })
      .then((movies) => {
        previousSearch.current = search
        setMovies(movies ?? [])
      })
      .catch((error) => {
        serError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { movies, updateMovies, error, loading }
}

export { useMovies }
