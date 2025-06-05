import React from 'react'
import styles from '../styles/DarkMode.module.css'

const DarkModeToggle = ({mode,updateMode}) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={()=>{updateMode(mode)}} >Toggle Dark Mode {/* TODO: Update this text dynamically */}</button>
  )
}

export default DarkModeToggle
