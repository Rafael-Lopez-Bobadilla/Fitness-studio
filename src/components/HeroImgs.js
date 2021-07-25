import './HeroImgs.css'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'

const images = [img1, img2, img3]

export default function HeroImgs() {
  return (
    <>
      {images.map((img, index) => {
        return <div
          key={`${index}`}
          className={`heroImgs img${index + 1}`}
          style={{
            background: `url(${img}) center/cover no-repeat`
          }}></div>
      })}
    </>
  )
}
