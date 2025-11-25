import React from 'react'

const Button = () => {

    function btnClicked(){
        console.log("Button Clicked")
    }

    const mouseEntered = () => {
        console.log("Mouse Entered");
        
    }

    return (
        <>
            <div className='p-6'>
                <h1 className='text-5xl font-bold'>Hello, Puskar</h1>
                <button onClick={btnClicked} onMouseEnter={mouseEntered} className='shadow-xl bg-gray-300 py-2 px-3 rounded-2xl mt-4 font-bold text-white'  >Change User</button>

                {/* <button onClick={()=>{
                    console.log("Button clicked");
                }}>Clicked</button> */}

                
            </div>
        </>
    )
}

export default Button
