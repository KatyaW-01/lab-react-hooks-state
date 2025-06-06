import React from 'react'
import styles from '../styles/DarkMode.module.css'
import Button from '@mui/material/Button';

const DarkModeToggle = ({mode,setDarkMode}) => {
  // TODO: Implement dark mode toggle logic

  return (
    <Button 
      className= {mode ? styles.dark : styles.light}
      variant="contained"
      onClick={()=>{setDarkMode(!mode)}} 
      sx={{m:2}}>
      {mode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </Button>
  )
}

export default DarkModeToggle
