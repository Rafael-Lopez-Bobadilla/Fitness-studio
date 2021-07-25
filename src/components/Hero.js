import './Hero.css'
import HeroImgs from './HeroImgs'
import { ExpandMore } from '@material-ui/icons'

export default function Hero() {

  return (
    <div className='hero'>
      <HeroImgs />
      <div className='hero__overlay'></div>
      <div className='hero__msg'>
        <div className='hero__msgLine'>IN PERSUIT OF</div>
        <div className='hero__msgLine'>HEALTH AND FITNESS</div>
      </div>
      <div className='hero__btn'>About</div>
      <div className='hero__arrow'>
        <ExpandMore style={{ fontSize: '70px' }} />
      </div>
    </div>
  )
}
