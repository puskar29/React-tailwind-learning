import React, { useState } from 'react'

const Counter = () => {

        const [num, setNum] = useState(0);

    function increaseNum(){
        setNum(num+1);
    }

    function decrementNum(){
        setNum(num-1);
    }

  return (
    <div className='flex flex-col items-center bg-amber-100 m-5 rounded-2xl p-6'>
      <h1 className='text-9xl font-bold m-4 flex justify-center items-center text-gray-200 bg-amber-600 p-15 rounded-xl h-60 w-70'>{num}</h1>
      <div className=''>
        <button className='px-3 py-2 text-white bg-green-500 rounded-md m-2 hover:bg-green-400 active:bg-green-500 cursor-pointer'onClick={increaseNum} >Increase</button>
        <button className='px-3 py-2 text-white bg-red-500 rounded-md m-3 hover:bg-red-400 active:bg-red-500 cursor-pointer' onClick={decrementNum}>Decrease</button>
      </div>
    </div>
  )
}

export default Counter
