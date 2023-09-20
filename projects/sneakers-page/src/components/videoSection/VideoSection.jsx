import './VideoSection.css'

export function VideoSection () {
  return (
    <section className='videoContainer'>
      <div className='videoSection'>
        <video autoPlay muted loop src='./src/assets/air1.mp4' />
      </div>
    </section>
  )
}
