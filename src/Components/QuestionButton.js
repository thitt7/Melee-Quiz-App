import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import questionArray from '../json/questions.json'

function QuestionButton(props) {
  /* State Declarations */
  const questionCategory = useSelector((state) => state.options.question_category)
  const questionType = useSelector((state) => state.options.question_type)
  const questionAmount = useSelector((state) => state.options.amount_of_questions)
  const questionIndex = useSelector((state) => state.index)

  const dispatch = useDispatch()


  // const handleQuery = async () => {
  //   let apiUrl = `https://opentdb.com/api.php?amount=${questionAmount}`

    

  //   if (questionType.length) {
  //     apiUrl = apiUrl.concat(`&type=${questionType}`)
  //   }

  //   await fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setQuestions(response.results)
  //     })

  //   if (questionIndex > 0) {
  //     dispatch({
  //       type: 'SET_INDEX',
  //       index: 0,
  //     })

  //     dispatch({
  //       type: 'SET_SCORE',
  //       score: 0,
  //     })
  //   }
  // }


const populateQuestions = () => {
  /* Reset score/questions from previous game */
  if (questionIndex > 0) {
        dispatch({
          type: 'SET_INDEX',
          index: 0,
        })
  
        dispatch({
          type: 'SET_SCORE',
          score: 0,
        })
}

/* parse questions from JSON into new object array, validate input for category, type, etc. */
let questionSet = Object.values(questionArray).filter((val, i)=> {
  if (questionType == "All" && questionCategory == "All") {return true}
  else if (questionType == "All") {return val.category == questionCategory}
  else if (questionCategory == "All") {return val.type == questionType}
  else {return val.type == questionType && val.category == questionCategory}
}
);
console.log(questionSet)

/* Randomize Question Array */
let shuffled = questionSet
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

/* Filter Randomized Selection by Number of Questions Selected */
questionSet = shuffled.filter((val, i)=> i <= questionAmount - 1)

dispatch ({
  type: 'SET_QUESTIONS', 
  questions: questionSet
})


}


  // return <button onClick={handleQuery}>{props.text}</button>
  return <button onClick={populateQuestions}>{props.text}</button>
}
export default QuestionButton
