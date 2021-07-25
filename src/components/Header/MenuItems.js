import './MenuItems.css'

const items = [
  'About',
  'Photos',
  'Coaches',
  'Pricing',
  'FAQs'
]
export default function MenuItems() {
  return (
    <>
      {items.map((item, index) => {
        return <div className='menuItems' key={`${index}`}>{item}</div>
      })}
    </>
  )
}
