import React from 'react'
import { useState } from 'react';

const TwoWayBinding = () => {

    const [title, setTitle] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Form Submitted by', title);
        setTitle('')
        
    }

    return (
        <div>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}>
                <input type="text" className='border text-xl px-4 py-3 m-5 rounded-2xl' placeholder='Enter your name' value={title} onChange={(e) => {
                    setTitle(e.target.value);
                    
                }}/>
                <button className='bg-blue-500 rounded-md px-3 py-2 text-white hover:bg-blue-600 active:bg-blue-500'>Submit</button>
            </form>

        </div>
    )
}

export default TwoWayBinding
