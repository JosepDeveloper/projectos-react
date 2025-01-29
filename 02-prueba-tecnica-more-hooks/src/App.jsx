import { useCallback } from 'react'
import './App.css'
import { Movies } from './components/movies'
import { Spinner } from './components/spinner'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App() {
  const { error, updateSearch, search } = useSearch()
  const { movies, updateMovies, loading } = useMovies()

  const debounceUpdateMovies = useCallback(debounce(updateMovies, 500), [])

  const handleChange = (event) => {
    updateSearch({ event })

    if (error) {
      return
    }

    debounceUpdateMovies({ search })
  }

  return (
    <div className='container'>
      <header>
        <h1>Buscador de Películas</h1>

        <input type='text' placeholder='Avengers, Batman, Spider-Man' onChange={handleChange} value={search} />
        {error && <p className='error'>{error}</p>}
      </header>

      <main>{loading ? <Spinner /> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
