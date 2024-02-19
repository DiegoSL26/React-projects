import './VideoSection.css'
import React from 'react'
import video from '../../assets/air1.mp4'

export function VideoSection ({ handleScrollClick }) {
  return (
    <section className='videoContainer'>
      <div className='videoSection'>
        <video autoPlay muted loop src={video} />
      </div>
      <div className='arrowContainer' onClick={handleScrollClick}>
        <img className='downArrow' src='https://cdn-icons-png.flaticon.com/512/2985/2985149.png' />
      </div>
    </section>
  )
}
