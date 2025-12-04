import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <div className='nav bg-black text-white flex justify-between items-center'>
        <div className='p-5 text-2xl font-bold'>
          <a href="/">Kanung</a>
        </div>
        <div className='flex gap-6 p-5'>
          <Link to='/' >Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/product'>Product</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
