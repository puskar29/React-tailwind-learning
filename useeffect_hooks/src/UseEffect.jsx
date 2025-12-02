import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(100)

    useEffect(function () {
        console.log("Use effect is running. ");
    }, [num])

    return (
        <div className='m-2 text-center'>
            <h1 className='text-5xl'>Value of num is {num}</h1>
            <h1 className='text-5xl'>Value of num2 is{num2}</h1>
            <button onClick={() => {
                setNum(num + 1)
            }} className='bg-blue-400 px-3 py-2 text-xl m-3 rounded text-white'
                onDoubleClick={() => {
                    setNum2(num2 + 1)
                }}>Click</button>
        </div>
    )
}

export default UseEffect
