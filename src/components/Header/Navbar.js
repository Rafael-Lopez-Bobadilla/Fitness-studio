import './Navbar.css'
import MenuItems from './MenuItems'

export default function Navbar({ openSideMenu }) {
  const handleNameClick = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className='nav'>
      <div className='nav__wrapper'>
        <div className='nav__name' onClick={handleNameClick}>Fitness Studio</div>
        <div className='nav__hamIcon' onClick={openSideMenu}>
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
