import React from 'react'

const Navbar = () => {
  return (
    <nav className='text-white bg-black p-6 flex justify-between items-center text-3xl font-serif font-bold text-center'>
        <div className="text-4xl">
            <h1>Kanung</h1>
        </div>
        <div className="text-[1rem] list-none flex gap-8">
            <li><a href="#" className='hover:text-[#5c5ce0]'>Home</a></li>
            <li><a href="#" className='hover:text-[#5c5ce0]'>Products</a></li>
            <li><a href="#" className='hover:text-[#5c5ce0]'>About Us</a></li>
            <li><a href="#" className='hover:text-[#5c5ce0]'>Contact</a></li>
        </div>
    </nav>
  )
}

export default Navbar
