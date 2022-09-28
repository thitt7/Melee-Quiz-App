import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import VideoQuestion from './VideoQuestion'

function Question() {
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const score = useSelector((state: any) => state.score)
  const questions = useSelector((state: any) => state.questions)
  const questionIndex = useSelector((state: any) => state.index)
  const answerSelected = useSelector((state: any) => state.isAnswered)

  const dispatch = useDispatch()

  const question = questions[questionIndex]
  const options = question.answers
  const answer = question.correct_answer
  const incorrect_answers = question.answers.filter((val: object) => val != answer)

  const handleListItemClick = (event: any) => {
    dispatch({
      type: 'SET_ANSWERED',
      answered: true,
    })
    setSelectedAnswer(event.target.textContent)

    if (event.target.textContent === answer) {
      dispatch({
        type: 'SET_SCORE',
        score: score + 1,
      })
    }

    if (question.type != "Guess That Player" && questionIndex + 1 <= questions.length) {
      setTimeout(() => {
        dispatch({
          type: 'SET_ANSWERED',
          answered: false,
        })
        setSelectedAnswer(null)

        dispatch({
          type: 'SET_INDEX',
          index: questionIndex + 1,
        })
      }, 5000)
    }
  }

  const getClass = (option: string) => {
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
      {question.type=="Guess That Player" ? <VideoQuestion/> : ''}
      <ul>
        {options.map((option: string, i: number) => (
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
