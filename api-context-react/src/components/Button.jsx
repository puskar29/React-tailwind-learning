import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {
    const [theme, setTheme] = useContext(ThemeDataContext)
    const changeTheme = () => {
        setTheme['dark']
    }
  return (
    <div>
      <button className='bg-blue-600 text-white px-3 py-1 rounded m-2'
      onClick={changeTheme}>Change Theme {setTheme}</button>
    </div>
  )
}

export default Button
