const API_URL = import.meta.env.VITE_API_URL

const API_KEY = import.meta.env.VITE_API_KEY

const OPTIONS_MOVIES = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': API_KEY
  }
}

export { API_URL, OPTIONS_MOVIES }
