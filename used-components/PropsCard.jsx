import React from 'react'

const PropsCard = (props) => {
  return (
    <div className='parent p-[20px]'>
      <div className="card border-2 shadow-2xl border-[#aeacb1] rounded-xl flex flex-col items-center p-[20px] text-center w-90 bg-[#F1F3E0]">
        <img src={props.img}
        className='h-40 w-40 object-fit rounded-[50%]' />
        <h1 className='text-4xl font-bold my-5'>{props.user}</h1>
        <p className='text-xl'>Lorem ipsum dolor sit amet adipisicing elit. Pariatur, illum?</p>
        <button className='px-2 py-2 bg-[#3b21cf] mt-5 text-white rounded-md '>View Profile</button>
      </div>
    </div>
    
    // <PropsCard user="Cody" img="https://images.unsplash.com/photo-1763182198113-a9a8d0fe3144?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    // <PropsCard user="Amber" img="https://plus.unsplash.com/premium_photo-1761941892640-f35028178a4f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile-img" />
    // <PropsCard user="Timer" img="https://images.unsplash.com/photo-1750841896972-7e78c4ba21d2?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D" />
    
  )
}

export default PropsCard
