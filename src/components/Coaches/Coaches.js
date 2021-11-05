import React, { useState, useEffect } from 'react'
import './Coaches.css'
import { coaches } from './coachesArray'
import SectionTitle from '../SectionTitle'

export default function Coaches() {
  const [photosIndexes, setPhotosIndexes] = useState(() => {
    let arrayOfIndexes = []
    for (let i = 0; i < (coaches.length * 2); i++) {
      arrayOfIndexes = [...arrayOfIndexes, i]
    }
    return arrayOfIndexes
  })
  const assignPossitons = (newArray) => {
    const midPhotoIndex = Math.round(photosIndexes.length / 2) - 1
    for (let i = 0; i < photosIndexes.length; i++) {
      const photo = document.getElementById(`coachesPhoto${newArray[i]}`)
      if (i < midPhotoIndex) {
        photo.style.left = `calc(-125% * ${midPhotoIndex - i})`
        photo.className = 'coaches__photo'
      }
      if (i === midPhotoIndex) {
        photo.className = 'coaches__photo center'
        photo.style.left = '0'
      }
      if (i > midPhotoIndex) {
        photo.style.left = `calc(125% * ${i - midPhotoIndex})`
        photo.className = 'coaches__photo'
      }
      if (i < midPhotoIndex - 2 || i > midPhotoIndex + 2) {
        photo.className = 'coaches__photo out'
      }
    }
  }
  useEffect(() => {
    assignPossitons(photosIndexes)
  }, [])
  const movePhotos = (index) => {
    const midPhotoIndex = Math.round(photosIndexes.length / 2) - 1
    const firstLeftPhoto = photosIndexes[midPhotoIndex - 1]
    const firstRightPhoto = photosIndexes[midPhotoIndex + 1]
    const secondLeftPhoto = photosIndexes[midPhotoIndex - 2]
    const secondRightPhoto = photosIndexes[midPhotoIndex + 2]
    let newArray = photosIndexes
    if (index === firstLeftPhoto) {
      newArray = [newArray[newArray.length - 1], ...newArray]
      newArray.pop()
      assignPossitons(newArray)
    }
    if (index === firstRightPhoto) {
      newArray = [...newArray, newArray[0]]
      newArray.shift()
      assignPossitons(newArray)
    }
    if (secondLeftPhoto === index) {
      for (let i = 0; i < 2; i++) {
        newArray = [newArray[newArray.length - 1], ...newArray]
        newArray.pop()
        assignPossitons(newArray)
      }
    }
    if (secondRightPhoto === index) {
      for (let i = 0; i < 2; i++) {
        newArray = [...newArray, newArray[0]]
        newArray.shift()
        assignPossitons(newArray)
      }
    }
    setPhotosIndexes(() => newArray)
  }

  const getCenterPhotoIndex = () => {
    return photosIndexes[coaches.length - 1] < coaches.length ?
      photosIndexes[coaches.length - 1] :
      photosIndexes[coaches.length - 1] - coaches.length
  }
  return (
    <div className='coaches'>
      <SectionTitle title='COACHES' />
      <div className='coaches__photosSection'>
        <div className="coaches__photosContainer">
          <div className='coaches__photosCenter'>
            {photosIndexes.map((photoIndex, index) => {
              return <div
                onClick={() => movePhotos(index)}
                id={`coachesPhoto${index}`}
                key={`coach${index}`}
                className={'coaches__photo'}>
                <img id={`coachesImg${index}`}
                  alt="not found"
                  src={index < coaches.length ? coaches[index].photo : coaches[index - coaches.length].photo}
                  className='coaches__img' />
              </div>
            })
            }
          </div>
        </div>
      </div>
      <div className='coaches__name'>{coaches[getCenterPhotoIndex()].name}</div>
      <div className='coaches__description'>
        {coaches[getCenterPhotoIndex()].description}
      </div>
      <div className='coaches__icons'>
        {coaches[getCenterPhotoIndex()].icons.map((icon, index) => {
          return <div key={index} className="coaches__iconContainer">
            <img src={icon.icon} className="coaches__icon" alt="not found" />
            <div>{icon.name}</div>
          </div>
        })
        }
      </div>
    </div>
  )
}
