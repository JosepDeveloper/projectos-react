import { useEffect, useState } from "react"
import { getCatFact, getImageCatUrl } from "../lib"

const useCatFacts = () => {
  const [fact, setFact] = useState('')

  const updateFact = () => {
    getCatFact().then(newFact => setFact(newFact))
  }

  useEffect(updateFact, [])

  return { fact, updateFact }
}

const useImageCat = ({ fact }) => {
  const [imageCat, setImageCat] = useState('')

  useEffect(() => {
    if (!fact) { return }

    const word = fact.split(' ', 3).join(' ')
    getImageCatUrl(word).then(image => setImageCat(image))

  }, [fact])

  return { imageCat }
}

export { useCatFacts, useImageCat }