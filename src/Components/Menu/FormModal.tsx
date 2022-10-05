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
  const types = useSelector((state: any) => state.questionTypes)
  const categories = useSelector((state: any) => state.questionCategories)
  
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState(types[0]);
  const [category, setCategory] = React.useState(categories[0]);

  const FormOpen = () => {
    setOpen(true);
  };

  const FormClose = () => {
    setOpen(false)
    props.setOpened(false)
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

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
            Just like the melee community itself, this site depends upon the contributions of fans to provide challenging questions and keep things interesting. Please submit any questions, no matter the difficulty, that you
          </DialogContentText>
          <TextField
          id="outlined-select-category"
          select
          label="Select Type"
          value={type}
          onChange={handleTypeChange}
          helperText="Please select question type"
        >
          {types.map((option: string, i: number) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="question"
            label="Question"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={FormClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
