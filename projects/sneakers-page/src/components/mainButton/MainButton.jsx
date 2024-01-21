import { Link } from 'react-router-dom'
import './MainButton.css'

export function MainButton ({ buttonText, route }) {
  return (
    <Link to={route}>
      <button className='mainButton'>
        {buttonText}
      </button>
    </Link>
  )
}
