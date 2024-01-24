import sneakersBrandNike from '../mocks/sneakersBrandNike.json'

export function getSneakers () {
  const filteredImageSneakers = sneakersBrandNike.results.filter((sneaker) => sneaker.image.thumbnail.length > 10)
  const filteredSneakers = [...new Map(filteredImageSneakers.map(item => [item.id, item])).values()]

  return filteredSneakers.map(sneaker => ({
    image: sneaker.image.thumbnail,
    title: sneaker.name,
    price: sneaker.retailPrice,
    gender: sneaker.gender,
    brand: sneaker.brand,
    colorway: sneaker.colorway,
    id: sneaker.id
  }))
}
