import React, { useState } from 'react'
import './Checkbox.css'

export function Checkbox ({ name, id, label, setFilter, filterName }) {
  const [checked, setChecked] = useState(true)

  const handleCheckBoxChange = (event) => {
    setChecked(event.target.checked)
    if (event.target.checked) {
      setFilter(prevFilter => ({ ...prevFilter, [filterName]: [...prevFilter[filterName], event.target.value] }))
    } else {
      setFilter(prevFilter => ({ ...prevFilter, [filterName]: prevFilter[filterName].filter(item => item !== event.target.value) }))
    }
  }

  return (
    <div className='checkbox-wrapper-47'>
      <input type='checkbox' name={name} id={id} value={name} onChange={handleCheckBoxChange} checked={checked} />
      <label htmlFor={id}><span>{label}</span></label>
    </div>
  )
}
