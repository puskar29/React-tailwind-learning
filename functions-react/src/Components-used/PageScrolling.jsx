import React from 'react'

const PageScrolling = () => {
    const pageScrolling = (value) => {
        if(value > 0){
            console.log("Straight scrolling");
        }
        else{
            console.log("Opposite scrolling");
            
        }
        
    }
  return (
    <div onWheel={(element) => {
        pageScrolling(element.deltaY)
    }} className='h-[200vh]'>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>
  )
}

export default PageScrolling
