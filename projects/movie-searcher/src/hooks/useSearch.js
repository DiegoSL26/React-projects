import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      return
    }
    if (query === '') {
      setError('No se puede buscar una película vacía')
    } else if (query.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
    } else {
      setError(null)
    }
  }, [query])

  return { query, setQuery, error }
}
