import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
  const [filter, setFilter] = useState({
    gender: ['men', 'women', 'kid'],
    brand: ['Nike', 'adidas', 'Jordan'],
    minPrice: 0,
    maxPrice: 500
  })

  return (
    <FiltersContext.Provider value={{ filter, setFilter }}>
      {children}
    </FiltersContext.Provider>
  )
}
