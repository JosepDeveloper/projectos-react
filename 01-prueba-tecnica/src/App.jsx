import './App.css'
import { useCatFacts, useImageCat } from './hook/cat-fact'

const App = () => {
  const { fact, updateFact } = useCatFacts()
  const { imageCat } = useImageCat({ fact })

  return (
    <main className='content'>
      <h1>App de gatos</h1>

      {fact && <p>{fact}</p>}
      {imageCat && (
        <img src={imageCat} alt={`Una imagen de referencia del texto: ${fact}`} width='300px' height='auto' />
      )}
      <button onClick={updateFact}>Otro palabra de gatos</button>
    </main>
  )
}

export default App
