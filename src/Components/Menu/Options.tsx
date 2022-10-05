import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux'
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormModal from './FormModal';

/* Options Menu */
const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function OptionsMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [opened, setOpened] = useState(false)
  const open = Boolean(anchorEl);

  const dispatch = useDispatch()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e: { target: any; }) => {
    setAnchorEl(null);
    e.target.innerText == "Suggestions" ? setOpened(true) : setOpened(false)
  };

  const reset = () =>
  {
    dispatch({
        type: 'SET_QUESTIONS',
        questions: [],
      })

      dispatch({
        type: 'SET_INDEX',
        index: 0,
      })
  
      dispatch({
        type: 'SET_SCORE',
        score: 0,
      })
  }

  return (
    <div className="options-button">
      <Button
        id="options-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Options
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={reset} disableRipple>
          <HomeIcon />
          Home/Reset
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <ScoreboardIcon />
          Scores
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Suggestions
        </MenuItem>
      </StyledMenu>
      <FormModal setOpened={setOpened} open={opened}/>
    </div>
  );
}
