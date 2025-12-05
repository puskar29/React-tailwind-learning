import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar2 = () => {
        let navigate = useNavigate()
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
      className='bg-green-800 py-1 px-5 text-white rounded m-2 active:scale-95 cursor-pointer'>Back</button>

      <button
      onClick={() => {
        navigate(+1)
      }} 
      className='bg-green-800 py-1 px-5 text-white rounded m-2 active:scale-95 cursor-pointer'>Next</button>
    </div>
  )
}

export default Navbar2
