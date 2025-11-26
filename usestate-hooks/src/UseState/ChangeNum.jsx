import React, {useState} from 'react'

const UseState = () => {
        const [num, setNum] = useState(1);

        function changeNum(){
            setNum(30)
        }

  return (
    <div>
      <h1>Value of num is {num}</h1>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default UseState
