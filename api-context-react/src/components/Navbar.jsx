import React from 'react'
import Nav2 from './Nav2'

const Navbar = (props) => {
  return (
    <div className='flex justify-between bg-black text-xl items-center text-white p-5'>
        <h2 className='text-3xl font-bold'>Kanung</h2>
        <Nav2 theme={props.theme} />
    </div>
  )
}

export default Navbar
