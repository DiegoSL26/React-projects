import React from 'react'
import './ItemCard.css'
import { Link } from 'react-router-dom'

export function ItemCard ({ imageRoute, title, price, brand, gender }) {
  return (
    <Link className='link' to='/detail'>
      <div className='card'>
        <img className='img' src={imageRoute} alt={title} />
        <div className='textBox'>
          <p className='text head'>{title}</p>
          <p className='text brand'>Marca: {brand}</p>
          <p className='text price'>${price}.0</p>
          <p className='text gender'>Genero: {gender}</p>
        </div>
      </div>
    </Link>
  )
}
