import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    console.log(props);
    
    return (
            <div className='h-full w-2/3 p-6 flex flex-nowrap gap-10 '>
            {props.users.map(function(element){
                return <RightCard image={element.image} id={element.id} intro={element.intro} tag={element.tag} /> 
            })}
            </div>

    )
}

export default RightContent
