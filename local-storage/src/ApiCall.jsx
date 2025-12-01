import React from 'react'
import axios from 'axios'

const ApiCall = () => {

    const getdata = async () => {
        // const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // // console.log(response);

        // const data = await response.json();
        // console.log(data); //Getdata information
        
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(data);
        
        
        
    }


  return (
    <div>
        <button className='m-10 bg-blue-400 text-white px-3 py-2 rounded' onClick={getdata}>Get Data</button>
    </div>
  )
}

export default ApiCall
