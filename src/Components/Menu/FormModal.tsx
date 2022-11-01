import React, {useState, useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Collapse from '@mui/material/Collapse'
import Alert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
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
  
  const [open, setOpen] = useState(false)
  const [alertStatus, setAlertStatus] = useState("error")
  const [alert, setAlert] = useState(false)
  
  let additionalProps = {category: "", difficulty: ""}
  const [formData, setFormData]: any = useState({type: "", question: "", correct_answer: "", answer2: ""})

  console.log("state on render is: " + JSON.stringify(formData))

  /* Form Handlers */

  const FormOpen = () => {
    setOpen(true)
  }

  const FormClose = () => {
    setOpen(false)
    props.setFormOpened(false)
  }

  const removeProp = (property: any) => {
    setFormData ((current: any) => {
      let copy = {...current}
      delete copy[property]
      return {...copy}
    })
  }

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let {name, value} = event.target
     setFormData({...formData, [name]: value})
     if (formData.type == "Multiple Choice") {setFormData({...formData,  answer3: "", answer4: ""})}
  }
  const submitHandler = (event: React.MouseEvent<HTMLElement>) => {
    
      /* Check if at least one field is empty */
      const isEmpty = Object.values(formData).some(x => x === null || x === '')
      console.log(formData)
      console.log(isEmpty)
      if (isEmpty) {
        setAlert(true)
        return
      }

      if (!isEmpty) {
      /* Reformat Form Data */
      let answersArr: string[] = []
      for (let i in formData) {
        if (i == "correct_answer") {
        answersArr.push(formData[i])
        continue
        }
        else if (i.match(/^answer/)) {
          console.log("entered regex if statement")
          answersArr.push(formData[i])
          removeProp(i)
        }
      }
      setFormData( (current: any) => {
        return {...additionalProps, ...current, answers: answersArr}
      })

      setAlertStatus("success")
      setAlert(true)

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
    }
  }

  useEffect(() => {
    setOpen(props.open)
  },[props.open]);

  return (
    <div>
      <Dialog open={open} onClose={FormClose}>
      <Collapse in={alert}>
      <Alert
          severity={alertStatus == "success" ? "success" : "error"}
          action={
            <IconButton
              sx={{marginLeft: 0}}
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlert(false);
              }}
            >
              <CloseIcon 
              sx={{marginLeft: 0}}
              fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {alertStatus == "success" ? "Thank you for your submission!" : "All fields are required!"}
        </Alert></Collapse>
        <DialogTitle align='center'
        sx={{  }}
        >Submit A Question
        </DialogTitle>
        <DialogContent>
          <DialogContentText
          align='center'
          sx={{marginBottom: 4 }}
          >
            Much like the Melee community itself, this project depends on the contributions of fans to provide stimulating questions and keep things interesting.
             Please submit any questions, no matter how obscure or difficult, and they will be reviewed and added to the game!
          </DialogContentText>
          <TextField onChange={(e)=>inputChangeHandler(e)}
          required
          id="questionType"
          name="type"
          select
          label="Select Type"
          helperText="Please select question type"
        >
          {types.filter((filtered: string) => filtered != "Guess That Player").map((option: string, i: number) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField onChange={(e)=>inputChangeHandler(e)}
          required
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
            margin="dense"
            id="answer2"
            name="answer2"
            label="Answer 2"
            type="text"
            fullWidth
            variant="standard"
          />
          {formData.type == "Multiple Choice" ?
          <div>
          <TextField onChange={(e)=>inputChangeHandler(e)}
            required
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
            margin="dense"
            id="answer4"
            name="answer4"
            label="Answer 4"
            type="text"
            fullWidth
            variant="standard"
          /></div> : ''}
        </DialogContent>
        <DialogActions>
          <Button onClick={submitHandler}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
