import React from 'react'
import './PromoSectionBanner.css'

export function PromoSectionBanner ({ imgRoute, bannerText }) {
  return (
    <div className='promoSection'>
      <img src={imgRoute} alt='Yellow Jordan 1 promo banner' />
      <div className='promoText'>{bannerText}</div>
    </div>
  )
}
