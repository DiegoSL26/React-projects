import { useState, useEffect, useRef } from 'react'

export const useDropdownFilterSection = () => {
  const [section, setSection] = useState(0)
  const filterRef = useRef(null)
  const sortRef = useRef(null)
  const filterSectionRef = useRef(null)
  const sortSectionRef = useRef(null)

  const handleClick = (e) => {
    if (filterRef.current.contains(e.target)) {
      if (section === 1) {
        setSection(0)
      } else {
        setSection(1)
      }
    } else if (sortRef.current.contains(e.target)) {
      if (section === 2) {
        setSection(0)
      } else {
        setSection(2)
      }
    } else {
      setSection(0)
    }
  }

  useEffect(() => {
    if (section === 0) {
      filterSectionRef.current.classList.remove('active')
      sortSectionRef.current.classList.remove('active')
      filterRef.current.classList.remove('activationButtonClick')
      sortRef.current.classList.remove('activationButtonClick')
    } else if (section === 1) {
      filterSectionRef.current.classList.add('active')
      sortSectionRef.current.classList.remove('active')
      filterRef.current.classList.add('activationButtonClick')
      sortRef.current.classList.remove('activationButtonClick')
    } else if (section === 2) {
      filterSectionRef.current.classList.remove('active')
      sortSectionRef.current.classList.add('active')
      filterRef.current.classList.remove('activationButtonClick')
      sortRef.current.classList.add('activationButtonClick')
    }
  }, [section])

  return { handleClick, filterRef, sortRef, filterSectionRef, sortSectionRef }
}
