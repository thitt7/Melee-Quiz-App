import { createStore } from "redux"


const initState = {
  options: {
    loading: false,
    question_category: `All`,
    question_difficulty: ``,
    question_type: `Multiple Choice`,
    amount_of_questions: 5,
  },
  questions: [],
  index: 0,
  score: 0,
  text: 'default'
}

const Reducer = (state = initState, action) => {
  switch (action.type) {

    case 'CHANGE_CATEGORY':
      return {
        ...state,
        options: {
          ...state.options,
          question_category: action.question_category,
        },
      }

    case 'CHANGE_DIFFICULTY':
      return {
        ...state,
        options: {
          ...state.options,
          question_difficulty: action.question_difficulty,
        },
      }

    case 'CHANGE_TYPE':
      return {
        ...state,
        options: {
          ...state.options,
          question_type: action.value,
        },
      }

    case 'CHANGE_AMOUNT':
      return {
        ...state,
        options: {
          ...state.options,
          amount_of_questions: action.value,
        },
      }

    case 'SET_QUESTIONS':
      return {
        ...state,
        questions: action.questions,
      }

    case 'SET_INDEX':
      return {
        ...state,
        index: action.index,
      }

    case 'SET_SCORE':
      return {
        ...state,
        score: action.score,
      }

      case 'test':
        return {
          ...state,
          text: action.value
        }

    default:
      return state
  }
}

const store = createStore(Reducer)

export default store
