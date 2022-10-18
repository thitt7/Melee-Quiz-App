import { createStore } from "redux"


const initState = {
  options: {
    loading: false,
    question_category: `All`,
    question_difficulty: ``,
    question_type: `Multiple Choice`,
    amount_of_questions: 10,
  },
  questionTypes: ["Multiple Choice", "True/False", "Guess That Player"],
  questionCategories: [],
  questions: [],
  index: 0,
  score: 0,
  text: 'default',
  isAnswered: false
}

const Reducer = (state = initState, action: any) => {
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

      case 'SET_ANSWERED':
        return {
          ...state,
          isAnswered: action.answered
        }

    default:
      return state
  }
}

const store = createStore(Reducer)

export default store
