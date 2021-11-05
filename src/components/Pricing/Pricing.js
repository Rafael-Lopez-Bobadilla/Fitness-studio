import { useState } from 'react'
import './Pricing.css'
import SectionTitle from '../SectionTitle'
import { cards } from './cards'

export default function Pricing() {

  const [activeCard, setActiveCard] = useState(() => cards[cards.length - 1])
  const changeActiveCard = (name) => {
    if (name !== activeCard.name) {
      const newCard = cards.find(card => card.name === name)
      setActiveCard(() => newCard)
    }
  }
  return (
    <div className='pricing'>
      <SectionTitle title='PRICING' />
      <div className='pricing__buttons'>
        <div>
          {cards.map((card) => {
            return <button className={`${activeCard.name === card.name ? 'active' : ''}`}
              onClick={() => changeActiveCard(card.name)}
              key={`${card.name}`}>
              {card.name}
            </button>
          })}
        </div>
      </div>
      <div className='pricing__cards'>
        {cards.map((card) => {
          return <div className={`pricing__card ${activeCard.name === card.name ? 'active' : ''}`}
            key={`${card.name}`}>
            <div style={{ color: `${card.color}` }} className='pricing__header'>
              <div>{card.name}</div>
              <div>${card.price} per month</div>
            </div>
            {card.features.map((feature) => {
              return <div key={`${feature}`} className='pricing__feature'>{feature}</div>
            })}
          </div>
        })}
      </div>
    </div>
  )
}
