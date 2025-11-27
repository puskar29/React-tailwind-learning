import React from 'react'
import {Bookmark} from 'lucide-react'

const Cards = (props) => {
  return (
      <div className="parent flex flex-wrap gap-5 p-1">
        <div className="card bg-white w-[300px] h-[400px] rounded-xl p-[30px] flex flex-col justify-between">

            <div className="top flex items-center justify-between">
                <img src={props.brandLogo} alt="" className='h-20 w-20 border rounded-full' />
                <button className='flex items-center bg-[#ffffff] border shadow-xl text-[#b4adad] text-[10px] py-1 px-2 rounded-md'>Save<Bookmark size={13}/></button>
            </div>

            <div className="center font-bold ">
                <h3 className='text-xl'>{props.companyName}  <span className='text-[11px] text-[#9d9999]'>{props.datePosted}</span></h3>
                <h2 className='text-2xl'>{props.post}</h2>
                <div className='text-[12px] font-bold flex gap-4 items-center mt-2 border-none'>
                    <h4 className='bg-[#dadada] px-3 py-1 rounded'>{props.tag1}</h4>
                    <h4 className='bg-[#dadada] px-3 py-1 rounded'>{props.tag2}</h4>
                </div>
            </div>

            <div className="bottom flex justify-between items-center border-t-1 border-[#dadada] pb-1 pt-4">
                <div>
                    <h3 className='text-xl font-bold'>{props.perHour}</h3>
                    <p className='text-[12px] text-[#898686]'>{props.location}</p>
                </div>
                <button className='bg-black text-white text-[13px] font-bold shadow-xl px-2 py-1 rounded-md '>Apply Now</button>
            </div>
        </div>
      </div>

  )
}

export default Cards
