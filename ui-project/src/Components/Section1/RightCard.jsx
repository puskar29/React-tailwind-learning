import React from 'react'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 bg-red-500 rounded-4xl relative overflow-hidden'>
        <img src={props.image} alt="" className='h-full object-cover'/>
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-between p-8">
            <h2 className='bg-white h-12 w-12 text-2xl justify-center items-center rounded-full flex font-semibold'>{props.id}</h2>
            <div className=''>
                <p className='text-lg leading-relaxed text-white mb-10'>{props.intro}</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-600 cursor-pointer'>{props.tag}</button>
                    <button className='bg-blue-500 text-white font-semibold px-3 py-2 rounded-full hover:bg-blue-600 cursor-pointer'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCard
