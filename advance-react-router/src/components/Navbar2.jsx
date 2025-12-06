import React from 'react'
import { useNavigate } from 'react-router-dom'
import Theme from './Theme'


const Navbar2 = (props) => {
        let navigate = useNavigate()
        console.log(props);
        
  return (
    <div className='bg-amber-50'>
      <button
      onClick={() => {
        navigate('/')
      }} 
      className='bg-green-800 py-1 px-5 text-white rounded m-2 active:scale-95 cursor-pointer'>Return to home page</button>

      <button
      onClick={() => {
        navigate(-1)
      }} 
      className='bg-green-800 py-1 px-3 text-white rounded m-2 active:scale-95 cursor-pointer'>Back</button>

      <button
      onClick={() => {
        navigate(+1)
      }} 
      className='bg-green-800 py-1 px-5 text-white rounded m-2 active:scale-95 cursor-pointer'>Next</button>
      
    </div>
  )
}

export default Navbar2
