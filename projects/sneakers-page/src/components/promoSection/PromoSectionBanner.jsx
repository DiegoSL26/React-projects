import React from 'react'
import './PromoSectionBanner.css'
import { Link } from 'react-router-dom'

export function PromoSectionBanner ({ imgRoute, bannerText }) {
  return (
    <Link className='promoSectionContainer' to='/detail'>
      <div className='promoSection'>
        <img src={imgRoute} alt='Yellow Jordan 1 promo banner' />
        <div className='promoText'>{bannerText}</div>
      </div>
    </Link>
  )
}
