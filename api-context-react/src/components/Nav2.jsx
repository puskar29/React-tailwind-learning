import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Nav2 = () => {

  const [theme, setTheme] = useContext(ThemeDataContext)

  
  return (
    <div className='text-xl flex gap-3 sm:gap-15 font-semibold items-center'>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
      <a href="#">{theme}</a>
    </div>
  )
}

export default Nav2
