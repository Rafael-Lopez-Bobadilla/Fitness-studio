import './SideMenu.css'
import MenuItems from './MenuItems'
import { ArrowForward } from '@material-ui/icons'
export default function SideMenu({ show, handleClick }) {
  return (
    <>
      <div className={`sideMenu__overlay ${show}`}></div>
      <div className={`sideMenu ${show}`}>
        <div className='sideMenu__arrow'
          onClick={handleClick}>
          <ArrowForward style={{ fontSize: '40px' }} />
        </div>
        <MenuItems />
      </div>
    </>
  )
}
