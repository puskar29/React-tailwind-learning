import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [num, setNum] = useState(0)

    useEffect(function(){
        console.log("Use effect is running. ");
    })

  return (
    <div className='m-2 text-center'>
        <h1 className='text-9xl'>{num}</h1>
        <button onClick={() => {
            setNum(10)
        }} className='bg-blue-400 px-3 py-2 text-xl rounded text-white'>Click</button>
    </div>
  )
}

export default UseEffect
