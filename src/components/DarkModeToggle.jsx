import React from 'react'
import styles from '../styles/DarkMode.module.css'
import Button from '@mui/material/Button';

const DarkModeToggle = ({mode,updateMode}) => {
  // TODO: Implement dark mode toggle logic

  return (
    <Button variant="contained"onClick={()=>{updateMode(mode)}} sx={{m:2}} >Toggle Dark Mode {/* TODO: Update this text dynamically */}</Button>
  )
}

export default DarkModeToggle
