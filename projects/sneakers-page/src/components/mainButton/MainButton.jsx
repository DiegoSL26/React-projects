import './MainButton.css'

export function MainButton ({ buttonText }) {
  return (
    <div className='mainButton'>
      <a href='#' />{buttonText}
    </div>
  )
}
