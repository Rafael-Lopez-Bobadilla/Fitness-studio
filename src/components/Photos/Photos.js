import './Photos.css'
import SectionTitle from '../SectionTitle'
import { photos } from './photosImport'
export default function Photos() {
  return (
    <div className='photos'>
      <SectionTitle title='PHOTOS' />
      <div className='photos__container'>
        <div className='photos__carousel'>
          {photos.map((photo, index) => {
            return <img src={photo} className='photos__small' key={`${index}`} alt='carousel' />
          })}
        </div>
        <img src={photos[0]} className='photos__bigPhoto' alt='big' />
      </div>
    </div>
  )
}
