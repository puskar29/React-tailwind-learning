import React, { useState } from 'react'

const BatchUpdate = () => {
    const [num, setNum] = useState(10)
    const btnClicked = () => {
        setNum(prev => prev+1)
        setNum(prev => prev+1)
        setNum(prev => prev+1)
    }
  return (
    <div>
      <h1>{num}</h1>
      <button className='px-3 py-2 text-white bg-green-500 rounded-md mt-2 hover:bg-green-400 active:bg-green-500 cursor-pointer' onClick={btnClicked} >Click</button>
    </div>
  )
}

export default BatchUpdate
