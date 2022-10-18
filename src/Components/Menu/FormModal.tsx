import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import MenuItem from '@mui/material/MenuItem'

export default function FormModal(props: any) {
  // interface FormDataType {type:string, category: string, difficulty: string, question:string, correct_answer: string, answer2: string, answer3: string, answer4: string}

  const types = useSelector((state: any) => state.questionTypes)
  const categories = useSelector((state: any) => state.questionCategories)
  
  const [open, setOpen] = React.useState(false);
  // let formData = {type:"", category: "", difficulty: "", question: "", correct_answer: "", answer2: "", answer3: "", answer4: ""}
  let formData: any = {type: "Multiple Choice", category: "", difficulty: ""}
  const [responseBody, setResponseBody] = useState(formData)

  /* Form Handlers */

  const FormOpen = () => {
    setOpen(true);
  };

  const FormClose = () => {
    setOpen(false)
    props.setOpened(false)
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let {name, value} = event.target
    formData = {...formData, [name]: value}
  }
  const submitHandler = (event: React.MouseEvent<HTMLElement>) => {
      // FormClose()
      let answersArr: string[] = []
      for (let i in formData) {
        i == "correct_answer" ? answersArr.push(formData[i]) : console.log("continue")
        if (i.match(/^answer/)) {
          answersArr.push(formData[i])
          delete formData[i]
        }
      }
      formData = {...formData, answers: answersArr}
      console.log(formData)
      setResponseBody({...formData})

      fetch('https://m2ic13md4d.execute-api.us-east-2.amazonaws.com/Prod/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then( res => {
        console.log(res)
        if (res.ok) {
          // const response = await res.json()
          FormClose()
        }
      })
      .then(data =>{
        console.log(data)
      })
      .catch(error => {

      })

      console.log(responseBody)
 
  }

  useEffect(() => {
    setOpen(props.open)
  },[props.open]);

  return (
    <div>
      <Dialog open={open} onClose={FormClose}>
        <DialogTitle>Suggestions
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Much like the melee community itself, this site depends upon the contributions of fans to provide challenging questions and keep things interesting.
             Please submit any questions you can think of and they will be approved and added to the game!
          </DialogContentText>
          <TextField onChange={(e)=>inputChangeHandler(e)}
          required
          id="questionType"
          name="type"
          select
          label="Select Type"
          value={types[0]}
          helperText="Please select question type"
        >
          {types.map((option: string, i: number) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField onChange={(e)=>inputChangeHandler(e)}
          required
            autoFocus
            margin="dense"
            id="question"
            name="question"
            label="Question"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField onChange={(e)=>inputChangeHandler(e)}
            required
            autoFocus
            margin="dense"
            id="correctAnswer"
            name="correct_answer"
            label="Correct Answer"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField onChange={(e)=>inputChangeHandler(e)}
            required
            autoFocus
            margin="dense"
            id="answer2"
            name="answer2"
            label="Answer 2"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField onChange={(e)=>inputChangeHandler(e)}
            required
            autoFocus
            margin="dense"
            id="answer3"
            name="answer3"
            label="Answer 3"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField onChange={(e)=>inputChangeHandler(e)}
            required
            autoFocus
            margin="dense"
            id="answer4"
            name="answer4"
            label="Answer 4"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={submitHandler}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
