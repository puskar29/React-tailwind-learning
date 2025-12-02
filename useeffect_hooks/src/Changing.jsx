import React, { useEffect, useState } from 'react'

const Chaning = () => {

  const [achange, setAchange] = useState(0)
  const [bchange, setBchange] = useState(0)

  function aChange(){
    console.log("A value changed");
  }

  function bChange(){
    console.log("B value changed");
  }

  useEffect(function(){
    aChange()
  },[achange])

  useEffect(function(){
    bChange()
  }, [bchange])

  return (
    <div>
      <h1 className='text-4xl m-3'>A is {achange}</h1>
      <h1 className='text-4xl m-3'>B is {bchange}</h1>
      <button className='px-3 py-2 bg-blue-300 rounded text-white m-3'
      onClick={()=>{
        setAchange(achange+1)
      }}>Changing A</button>
      <button className='px-3 py-2 bg-blue-300 rounded text-white m-3'
      onClick={() => {
        setBchange(bchange-1)
      }}>Changing B</button>
    </div>
  )
}

export default Chaning
