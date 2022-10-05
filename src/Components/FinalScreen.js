import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function FinalScreen() {
  const score = useSelector((state) => state.score)
  const questions = useSelector((state) => state.questions)
  const FinalScore = Math.round((score / questions.length)*100)

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
      <button onClick={replay}>Try Quiz Again</button>
      <button onClick={settings}>Back to Home</button>
    </div>
  )
}
export default FinalScreen
