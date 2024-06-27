import React, {useState, useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import MailIcon from '@mui/icons-material/Mail'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MenuItem from '@mui/material/MenuItem'
import { Box } from '@mui/material'

export default function ContactModal(props: any) {
  // interface FormDataType {type:string, category: string, difficulty: string, question:string, correct_answer: string, answer2: string, answer3: string, answer4: string}
  
  const [open, setOpen] = useState(false)

  /* Form Handlers */

  const FormOpen = () => {
    setOpen(true)
  }

  const FormClose = () => {
    setOpen(false)
    props.setContactOpened(false)
  }

  useEffect(() => {
    setOpen(props.open)
  },[props.open]);

  return (
    <div>
      <Dialog fullWidth={true} maxWidth={'md'}
      open={open} onClose={FormClose}>
        <DialogTitle align='center'
        >A Little Bit About This Project
        </DialogTitle>
        <DialogContent>
          <DialogContentText
          align='center'
          sx={{marginBottom: 4 }}
          >
            This is a passion project of mine, close to my heart because it's my first real project that got me into React.js. It's made possible not only from input by the people that use it, but by the elegant libraries it's built on, namely <a target="_blank" href="https://reactjs.org/">ReactJS </a> 
            and <a target="_blank" href="https://mui.com/">Material UI</a>. I built it with help from content provided by YouTuber <a target="_blank" href="https://www.youtube.com/c/Frudgey">Frudgey</a> who is awesome. 
            I am open to any and all suggestions you may have. I am also always on the lookout to collaborate with a designer to add some more custom UI features that closely resemble the UI of Melee itself.
             If that sounds like you, then please drop me a line so we can work together. Feel free to reach out to me on any of the platforms listed below.
          </DialogContentText>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              m: 'auto',
              width: 'fit-content',
              gap: '20px',
            }}
          >
            <a target="_blank" href="mailto:tristan@hitt.dev"> <MailIcon fontSize="large"/> </a>
            <a target="_blank" href="https://github.com/thitt7"> <GitHubIcon fontSize="large"/> </a>
            <a target="_blank" href="https://www.youtube.com/c/Frudgey"> <YouTubeIcon fontSize="large"/> </a>
            <a target="_blank" href="https://www.linkedin.com/in/tristan-hitt-6b0a0346/"> <LinkedInIcon fontSize="large" /> </a>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  )
}
