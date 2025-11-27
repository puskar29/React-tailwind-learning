import React from 'react'
import Ex2 from '../my-project/src/Components/Ex2'

const Ex1 = (props) => {
  return (
    <>
    <div>I am example {props.name} </div>
    <Ex2 user={props.name} />
    </>
  )
}

export default Ex1
