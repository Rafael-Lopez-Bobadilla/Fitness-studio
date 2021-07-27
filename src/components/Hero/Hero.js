import './Hero.css'
import HeroImgs from './HeroImgs'
import { ExpandMore } from '@material-ui/icons'
import { scrollTo } from '../Header/scrollTo'
export default function Hero() {

  const goToAbout = () => {
    scrollTo('about')
  }

  return (
    <div className='hero'>
      <HeroImgs />
      <div className='hero__overlay'></div>
      <div className='hero__msg'>
        <div className='hero__msgLine'>IN PERSUIT OF</div>
        <div className='hero__msgLine'>HEALTH AND FITNESS</div>
      </div>
      <div className='hero__btn' onClick={goToAbout}>About</div>
      <div className='hero__arrowContainer' onClick={goToAbout}>
        <div className='hero__arrow'>
          <ExpandMore style={{ fontSize: '70px' }} />
        </div>
      </div>
    </div>
  )
}
