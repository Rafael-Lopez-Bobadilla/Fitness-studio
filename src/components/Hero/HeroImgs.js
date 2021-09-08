import { useState, useEffect } from 'react'
import './HeroImgs.css'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'

const images = [img1, img2, img3]

export default function HeroImgs() {

  const [imgs, setImgs] = useState(() => [])
  useEffect(() => {
    const imgsArray = Array.from(document.getElementsByClassName(`heroImgs`))
    setImgs(() => imgsArray)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      imgs.forEach((img, index) => {
        if (index === 2) { img.style.opacity = '1' } else {
          img.style.opacity = '0'
        }
      })
      let newImagesArray = imgs
      newImagesArray.unshift(newImagesArray[newImagesArray.length - 1])
      newImagesArray.pop()
      setImgs(() => newImagesArray)
    }, 5000)
  }, [imgs])

  return (
    <>
      {images.map((img, index) => {
        return <div
          key={`${index}`}
          className={`heroImgs img${index}`}
          style={{
            background: `url(${img}) center/cover no-repeat`
          }}></div>
      })}
    </>
  )
}
