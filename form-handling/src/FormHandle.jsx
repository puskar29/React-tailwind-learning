import React from 'react'

const FormHandle = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Form Submitted');
        
    }

    return (
        <div>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}>
                <input type="text" className='border text-xl px-4 py-3 m-5 rounded-2xl' placeholder='Enter your name' />
                <button className='bg-blue-500 rounded-md px-3 py-2 text-white hover:bg-blue-600 active:bg-blue-500'>Submit</button>
            </form>

        </div>
    )
}

export default FormHandle
