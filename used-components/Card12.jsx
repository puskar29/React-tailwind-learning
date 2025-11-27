import React from 'react'

const Card = (props) => {
    return (
        <div className='mr-5 bg-[#51b9ed] text-black p-6 rounded-md text-center flex flex-col w-[250px] items-center'>
            <img src={props.img} alt="" className="h-32 w-32 rounded-full mb-3 border-white border-2 ml-3" />
            <p className='text-2xl font-semibold text-center mb-2'>{props.user}</p>
            <p className='text-[16px]'>{props.profession}</p>
            <p className='text-[14px] text-center'>{props.city},{props.age}</p>
            <button className='px-4 py-2 rounded-md mt-3 bg-[#e63111c6] text-white'>Add Friend</button>
        </div>
    )
}

export default Card
 