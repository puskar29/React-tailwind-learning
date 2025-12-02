import React from 'react'
import axios from 'axios'
const Gallery = () => {

  const getData = async () => {
    axios.get('https://picsum.photos/v2/list?page=2&limit=100');
  }

  return (
    <div className='h-screen bg-black text-white'>
      <button 
      onClick={getData}
      className='px-5 py-3 hover:bg-green-500 active:bg-green-600 bg-green-600 active:scale-95 rounded m-3 '>Get Data</button>
    </div>
  )
}

export default Gallery
