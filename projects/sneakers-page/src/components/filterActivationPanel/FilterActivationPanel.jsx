import React from 'react'
import './FilterActivationPanel.css'

export function FilterActivationPanel ({ icon, span, reference, handle }) {
  return (
    <li onClick={handle} ref={reference} className='activationButton'>
      <img src={icon} alt='filter-icon' />
      <span>{span}</span>
    </li>
  )
}
