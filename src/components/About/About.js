import { useEffect } from 'react'
import './About.css'
import SectionTitle from '../SectionTitle'
import about1 from '../../images/about1.jpg'
import about2 from '../../images/about2.jpg'
import about3 from '../../images/about3.jpg'
import { createObserver } from './observer'

const aboutInfo = [
  {
    img: about1,
    title: 'OUR GYM',
    info: 'Fitness Studio is a vibrant community of like-minded individuals in pursuit of health and fitness. Our Coaches are dedicated to providing you with a safe, fun, and effective training program that will help you meet your fitness goals. We encourage you to join our family.'
  },
  {
    img: about2,
    title: 'A CUSTOMIZED FITNESS PROGRAM JUST FOR YOU',
    info: 'You receive an individually-crafted, customized fitness plan just for you. Your goals. Your workout. Your results.'
  },
  {
    img: about3,
    title: 'ATHLETIC PERFORMANCE COACHING',
    info: 'Our trainers and coaching team provides results-based personalized sports performance and fitness programs for athletes at all levels.'
  }
]

export default function About() {
  useEffect(() => {
    createObserver()
  }, [])
  return (
    <div className='about'>
      <SectionTitle title={'ABOUT'} />
      {aboutInfo.map((article, index) => {
        let switchPosition = false
        if ((index + 1) % 2 === 0) { switchPosition = true }
        return <div key={`${index}`} className='about__article'>
          <img className={`about__img ${switchPosition}`} src={article.img} alt='about img' />
          <div className={`about__info ${switchPosition}`}>
            <div className='about__infoTitle'>{article.title}</div>
            <div className='about__infoText'>{article.info}</div>
          </div>
        </div>
      })}
    </div>
  )
}
