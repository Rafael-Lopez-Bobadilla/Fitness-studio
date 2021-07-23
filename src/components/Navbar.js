import './Navbar.css'
import MenuItems from './MenuItems'
export default function Navbar({ handleHamClick }) {
  return (
    <div className='nav'>
      <div className='nav__wrapper'>
        <div className='nav__name'>Fitness Studio</div>
        <div className='nav__hamIcon' onClick={handleHamClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='nav__menu'>
          <MenuItems />
        </div>
      </div>
    </div>
  )
}
