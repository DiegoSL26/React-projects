import React from 'react'
import './ItemCard.css'
import { Link } from 'react-router-dom'

export function ItemCard ({ imageRoute, title, price, brand, gender }) {
  return (
    <Link className='link' to='/detail'>
      <div className='card'>
        <img className='sneakerImg' src={imageRoute} alt={title} />
        <div className='textBox'>
          <p className='text brand'>{brand}</p>
          <p className='text price'>${price}.0</p>
          <p className='text gender'>{gender}</p>
        </div>
        <p className='textHead'>{title}</p>
      </div>
    </Link>
  )
}
