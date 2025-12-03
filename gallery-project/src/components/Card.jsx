import React from 'react'

const Card = (props) => {
    return (
        <div>
            <a href={props.elem.url} target='_blank'>
                <div className='h-55 w-60 overflow-hidden rounded-2xl'>
                    <img src={props.elem.download_url} alt="" className='h-full w-full object-cover' />
                </div>
                <h1 className='p-3 font-bold text-lg'>{props.elem.author}</h1>
            </a>
        </div>
    )
}

export default Card