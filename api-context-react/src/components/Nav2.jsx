import React from 'react'

const Nav2 = (props) => {
  return (
    <div className='text-xl flex gap-5 sm:gap-15 font-semibold items-center'>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
      {props.theme}
    </div>
  )
}

export default Nav2
