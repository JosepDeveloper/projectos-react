import { factRandomAPI, imageRandomAPI, imageRandomAPIKEY } from './const'

const getCatFact = async () => {
  const response = await fetch(factRandomAPI)
  const data = await response.json()

  return data.fact
}

const getImageCatUrl = async (word) => {
  const url = `${imageRandomAPI}?api_key=${imageRandomAPIKEY}&q=${word}&limit=1`
  const response = await fetch(url)
  const { data } = await response.json()

  const [images] = data
  const { images: image } = images
  const { original } = image
  const { url: imageUrl } = original

  return imageUrl
}

export { getCatFact, getImageCatUrl }