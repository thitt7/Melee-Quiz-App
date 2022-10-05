import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import QuestionButton from './QuestionButton'

function Settings () {
    const questionCategory = useSelector((state) => state.options.question_category)
    const questionType = useSelector((state) => state.options.question_type)
    const questionAmount = useSelector((state) => state.options.amount_of_questions)

    const dispatch = useDispatch()

    /* Selection Handlers*/
    const handleGameTypeChange = event => {
      dispatch({
        type: 'CHANGE_TYPE',
        value: event.target.value
      })
    }

console.log(questionType)

    const handleQuestionNumChange = event => {
      dispatch({
        type: 'CHANGE_AMOUNT',
        value: event.target.value
      })
    }

        return (
            <div className='options'>
              <div>
                <h2>Select Game Type:</h2>
                <select onChange={handleGameTypeChange}>
                  <option>Multiple Choice</option>
                  <option>True/False</option>
                  <option>Guess That Player</option>
                  <option>All</option>
                </select>
              </div>
              {/* <div>
                <h2>Select Difficulty:</h2>
                <select value={questionDifficulty} onChange={handleDifficultyChange}>
                  <option value="" key="difficulty-0">All</option>
                  <option value="easy" key="difficulty-1">Easy</option>
                  <option value="medium" key="difficulty-2">Medium</option>
                  <option value="hard" key="difficulty-3">Hard</option>
                </select>
              </div> */}
                <div>
                <h2>Number of Questions:</h2>
                <input type="number" min="0" onChange={handleQuestionNumChange} />
              </div>

              <QuestionButton text="Show Me Your Moves!"/>

            </div>

          )


}

export default Settings