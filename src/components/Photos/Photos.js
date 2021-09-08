import { useState, useRef } from 'react'
import './Photos.css'
import SectionTitle from '../SectionTitle'
import { photos } from './photosImport'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
export default function Photos() {
  const [photoIndex, setPhotoIndex] = useState(() => 0)
  const slides = useRef()
  const changePhoto = (direction) => {
    if (direction === 'left') {
      if (photoIndex === 0) {
        slides.current.style.transform = `translateX(${(photos.length - 1) * -100}%)`
        setPhotoIndex(() => photos.length - 1)
      } else {
        slides.current.style.transform = `translateX(${(photoIndex - 1) * -100}%)`
        setPhotoIndex(() => photoIndex - 1)
      }
    }
    if (direction === 'right') {
      if (photoIndex === photos.length - 1) {
        slides.current.style.transform = `translateX(0)`
        setPhotoIndex(() => 0)
      } else {
        slides.current.style.transform = `translateX(${(photoIndex + 1) * -100}%)`
        setPhotoIndex(() => photoIndex + 1)
      }
    }
  }
  return (
    <div className='photos'>
      <SectionTitle title="PHOTOS" />
      <div className='photos__sliderContainer'>
        <div className='photos__arrow left' onClick={() => changePhoto('left')}><ArrowBack style={{ fontSize: '30px' }} /></div>
        <div className='photos__slider'>
          <div className='photos__index'>{`${photoIndex + 1}/10`}</div>
          <div className='photos__slides' ref={slides}>
            {photos.map((photo, index) => {
              return <img className='photos__slide' src={photo} alt='gym' key={`${index}`} />
            })}
          </div>
        </div>
        <div className='photos__arrow right' onClick={() => changePhoto('right')}><ArrowForward style={{ fontSize: '30px' }} /></div>
      </div>
    </div >
  )
}
