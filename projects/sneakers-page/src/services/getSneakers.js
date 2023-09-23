import sneakersBrandNike from '../mocks/sneakersBrandNike.json'

export function getSneakers () {
  const filteredSneakers = sneakersBrandNike.results.filter((sneaker) => sneaker.image.thumbnail.length > 10)
  return filteredSneakers.map(sneaker => ({
    image: sneaker.image.thumbnail,
    title: sneaker.name,
    id: sneaker.id
  }))
}
