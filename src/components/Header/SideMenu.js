import './SideMenu.css'
import MenuItems from './MenuItems'
import { ArrowForward } from '@material-ui/icons'
export default function SideMenu({ show, closeSideMenu }) {
  return (
    <>
      <div className={`sideMenu__overlay ${show}`}></div>
      <div className={`sideMenu ${show}`}>
        <div className='sideMenu__arrow'
          onClick={closeSideMenu}>
          <ArrowForward style={{ fontSize: '40px' }} />
        </div>
        <MenuItems closeSideMenu={closeSideMenu} />
      </div>
    </>
  )
}
