import { useState } from 'react'
import Navbar from "./Navbar"
import SideMenu from "./SideMenu"
export default function Header() {
  const [showMenu, setShowMenu] = useState(() => false)

  const handleClick = () => {
    setShowMenu(() => !showMenu)
  }
  return (
    <>
      <SideMenu show={showMenu} handleClick={handleClick} />
      <Navbar handleHamClick={handleClick} />
    </>
  )
}
