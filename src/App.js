import { useSelector } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Settings from './Components/Settings'
import Question from './Components/Question'
import FinalScreen from './Components/FinalScreen'
import OptionsMenu from './Components/Menu/Options'

import './App.css'

function App() {
  const darkTheme = createTheme({ palette: { mode: 'dark', }, });
  const questions = useSelector((state) => state.questions)
  const questionIndex = useSelector((state) => state.index)

  let component

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />
  } else if (!questions.length) {
    component = <Settings />
  } else {
    component = <FinalScreen />
  }

  return (
    <ThemeProvider theme={darkTheme}>
    <div className="vid-container">
    <iframe src="https://www.youtube.com/embed/06tTwaaxbRc?controls=0&autoplay=1&mute=1&playlist=06tTwaaxbRc&loop=1"></iframe>
    </div>
    <OptionsMenu/>
    <div className="App">
      <div className="app-container">{component}</div>
    </div>
    </ThemeProvider>
  )
}

export default App
