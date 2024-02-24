import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters () {
  const { filter, setFilter } = useContext(FiltersContext)

  const filterSneakers = (sneakers) => {
    return sneakers.filter(sneaker => {
      return (
        filter.brand.includes(sneaker.brand) &&
            filter.gender.includes(sneaker.gender) &&
            sneaker.price >= filter.minPrice && sneaker.price <= filter.maxPrice
      )
    })
  }

  const handleChangeMinPrice = (event) => {
    setFilter({ ...filter, minPrice: event.target.value })
  }

  const handleChangeMaxPrice = (event) => {
    if (event.target.value === '') {
      setFilter({ ...filter, maxPrice: 500 })
    } else {
      setFilter({ ...filter, maxPrice: event.target.value })
    }
  }

  return { filterSneakers, handleChangeMinPrice, handleChangeMaxPrice }
}
