import './MenuItems.css'
import { scrollTo } from './scrollTo'
const items = [
  'About',
  'Photos',
  'Coaches',
  'Pricing',
  'FAQs'
]
export default function MenuItems({ closeSideMenu }) {
  const itemClick = (item) => {
    if (closeSideMenu) { closeSideMenu() }
    scrollTo(item)
  }
  return (
    <>
      {items.map((item, index) => {
        return <div className='menuItems' key={`${index}`} onClick={() => itemClick(item)}>{item}</div>
      })}
    </>
  )
}
