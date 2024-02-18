import React from 'react'
import './Input.css'

export function Input ({ name, id, label }) {
  return (
    <div className='checkbox-wrapper-47'>
      <input type='checkbox' name={name} id={id} />
      <label htmlFor={id}><span>{label}</span></label>
    </div>
  )
}
