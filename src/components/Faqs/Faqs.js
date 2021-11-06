import './Faqs.css'
import SectionTitle from '../SectionTitle'
import { questions } from './questions'
import { ArrowDownward } from '@material-ui/icons'

export default function Faqs() {

  const showAnswer = (index) => {
    const answer = document.getElementById(`answer${index}`)
    const arrow = document.getElementById(`arrow${index}`)
    if (answer.className === 'faqs__answer') {
      answer.className = 'faqs__answer show'
      arrow.className = 'faqs__arrow rotate'
    } else {
      answer.className = 'faqs__answer'
      arrow.className = 'faqs__arrow'
    }
  }
  return (
    <div className='faqs'>
      <SectionTitle title="FAQS" />
      {questions.map((question, index) => {
        return <div className='faqs__container' key={`q${index}`}>
          <div className='faqs__question' onClick={() => showAnswer(index)}>
            <div>{question.question}</div>
            <div className='faqs__arrow' id={`arrow${index}`}><ArrowDownward style={{ fontSize: '25px' }} /></div>
          </div>
          <div className='faqs__answer' id={`answer${index}`}><div>{question.answer}</div></div>
        </div>
      })}
    </div>
  )
}
