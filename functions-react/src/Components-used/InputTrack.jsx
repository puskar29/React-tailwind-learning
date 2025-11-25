import React from 'react'

const InputTrack = () => {
    const inputChanging = (val) => {
        console.log(val)
    }
  return (
    <div>
      <input type="text" name="" id="" placeholder='Enter your name' onChange={(element) => {
        inputChanging(element.target.value);
        
      }} className='border m-4 px-5 py-2 rounded-md font-bold outline-none' />
    </div>
  )
}

export default InputTrack
