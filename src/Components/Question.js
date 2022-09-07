import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import videoQuestion from './videoQuestion'

function Question() {
  const [answerSelected, setAnswerSelected] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answers, setAnswers] = useState([])
  

  const score = useSelector((state) => state.score)
  const questions = useSelector((state) => state.questions)
  const questionIndex = useSelector((state) => state.index)

  const dispatch = useDispatch()

  const question = questions[questionIndex]
  const options = question.answers
  const answer = question.correct_answer
  const incorrect_answers = question.answers.filter((val) => val != answer)

  const handleListItemClick = (event) => {
    setAnswerSelected(true)
    setSelectedAnswer(event.target.textContent)

    if (event.target.textContent === answer) {
      dispatch({
        type: 'SET_SCORE',
        score: score + 1,
      })
    }

    if (questionIndex + 1 <= questions.length) {
      setTimeout(() => {
        setAnswerSelected(false)
        setSelectedAnswer(null)

        dispatch({
          type: 'SET_INDEX',
          index: questionIndex + 1,
        })
      }, 2500)
    }
  }

  const getClass = option => {
    if (!answerSelected) {
      return ``;
    }


    if (answerSelected) {
    if (option === answer) {
      return `correct off`
    }

    if (option === selectedAnswer) {
      return `selected off`
    }

    else {return 'off'}

  }

  }

  if (!question) {
    return <div>Loading</div>
  }

  return (
    <div>
      <p>Question {questionIndex + 1}</p>
      <h3>{question.question}</h3>
      {isVideo ? <videoQuestion/> : ''}
      <ul>
        {options.map((option, i) => (
          <li key={i} onClick={handleListItemClick} className={getClass(option)}>
            {option}
          </li>
        ))}
      </ul>
      <div>
        Score: {score} / {questions.length}
      </div>
    </div>
  )
}
export default Question
