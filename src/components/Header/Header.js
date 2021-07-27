import { useState } from 'react'
import Navbar from "./Navbar"
import SideMenu from "./SideMenu"
export default function Header() {
  const [showMenu, setShowMenu] = useState(() => false)

  const moveSideMenu = () => {
    setShowMenu(() => !showMenu)
  }
  return (
    <>
      <SideMenu show={showMenu} closeSideMenu={moveSideMenu} />
      <Navbar openSideMenu={moveSideMenu} />
    </>
  )
}
