import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <div className='bg-black text-white flex justify-between items-center'>
        <Link to="/" className='text-3xl py-2 px-5 font-bold'>Kanung</Link>
        <div className="flex gap-4 py-5 px-5 font-semibold">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/product'>Product</Link>
          <Link to='/courses'>Courses</Link>
          <Link to='/contact'>Contact</Link>
        </div>
    </div>
    </div>
   
  )
}

export default Navbar
