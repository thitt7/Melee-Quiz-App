import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import FetchButton from './QuestionButton'

function FinalScreen() {
  const score = useSelector((state) => state.score)
  const questions = useSelector((state) => state.questions)
  const FinalScore = Math.round((questions.length / score)*100)
  console.log((questions / score)*100)
  console.log(questions/score)

  const dispatch = useDispatch()

  const replay = () => {
    dispatch({
      type: 'SET_INDEX',
      index: 0,
    })

    dispatch({
      type: 'SET_SCORE',
      score: 0,
    })
  }

  const settings = () => {
    dispatch({
      type: 'SET_QUESTIONS',
      questions: [],
    })

    dispatch({
      type: 'SET_SCORE',
      score: 0,
    })
  }

  return (
    <div>
      <h3>Final Score: {FinalScore + "%"}</h3>
      <button onClick={replay}>Try again</button>
      <FetchButton text="Fetch new questions" />
      <button onClick={settings}>Back to settings</button>
    </div>
  )
}
export default FinalScreen
