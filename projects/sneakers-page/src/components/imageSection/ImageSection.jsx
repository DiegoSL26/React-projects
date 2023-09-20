import './ImageSection.css'

export function ImageContainer ({ imageRoute }) {
  return (
    <section className='imgContainer'>
      <div className='imgSection'>
        <img src={imageRoute} alt='Bad Bunny Forum image' />
      </div>
    </section>
  )
}
