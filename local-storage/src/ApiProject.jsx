import React, { useState } from 'react'
import axios from 'axios'

const ApiProject = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list');
        setData(response.data)
    }

  return (
    <div>
        <button className='m-10 bg-blue-400 text-white px-3 py-2 rounded' onClick={getData}>Get Data</button>

        <div>
            {data.map(function(elem, idx){
                return <h3>Hello {idx}</h3>
            })}
        </div>
    </div>
  )
}

export default ApiProject
