import { useEffect } from 'react'
import { useCallback } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const useSearch = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const firstSearch = useRef(true)

  const updateSearch = useCallback(({ event }) => {
    const { value } = event.target

    setSearch(value)
  }, [])

  useEffect(() => {
    if (firstSearch.current) {
      firstSearch.current = search === ''
      return
    }

    if (search.startsWith(' ')) {
      setError('No se puede buscar con un espacio en blanco')
      return
    }

    if (search.length === 0) {
      setError('No puedes buscar con un valor vacío')
      return
    }

    if (search.length <= 3) {
      setError('No se puede buscar con solo tres caracteres')
      return
    }

    if (search.match(/^[0-9]*$/)) {
      setError('No puedes buscar con solo digitos')
      return
    }

    setError(null)
  }, [search])

  return { updateSearch, error, search }
}

export { useSearch }
