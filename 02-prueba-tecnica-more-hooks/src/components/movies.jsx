function MoviesWithResult({ movies }) {
  if (movies.length === 0) {
    return <p>No hay resultados</p>
  }

  return (
    <ul className='movies'>
      {movies.map((movie, index) => (
        <li key={`${movie.title}-${index}`} className='movie'>
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  )
}

function MoviesNoResult() {
  return <p className='error'>No hay resultados</p>
}

function Movies({ movies }) {
  if (!movies) {
    if (movies === null) {
      return
    }
    return <MoviesNoResult />
  }
  return <MoviesWithResult movies={movies} />
}

export { Movies }
