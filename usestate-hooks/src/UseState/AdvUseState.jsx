import React, { useState } from 'react'

const AdvUseState = () => {

  // const [num, setNum] = useState({user:'Puskar', age:19})
  // const [num, setNum] = useState([10, 20, 30]);
  const [value, setValue] = useState({user:'Tim', age:16})

  const btnClicked = () => {
    //----------String----------
    // const newNum = {...num};
    // newNum.user = 'Tim';
    // newNum.age = 20;
    // setNum(newNum)

    //-----------Array----------
    // const newArr = [...num]
    // newArr.push(99)
    // setNum(newArr)

    //Update previous value
    setValue(prev => ({...prev, age: 20}))


}

  return (
    <div className='m-4'>
      {/* <h1 className='text-8xl font-bold'>{num.user}, {num.age}</h1> */}
      {/* <h1 className='text-8xl font-bold'>{num}</h1> */}
      <h1 className='text-8xl font-bold'>{value.user}, {value.age}</h1>
      <button className='px-3 py-2 text-white bg-green-500 rounded-md mt-2 hover:bg-green-400 active:bg-green-500 cursor-pointer' onClick={btnClicked} >Click</button>
    </div>
  )
}

export default AdvUseState
