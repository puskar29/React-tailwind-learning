import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GalleryApp = () => {

    const [userData, setUserData] = useState([])

    const getData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=30');

        setUserData(response.data)
        console.log(response.data);
    }

    useEffect(function(){
        getData()
    }, [])

    let printUserData = <h3>No User Available</h3>;

    if (userData.length > 0) {
        printUserData = userData.map(function (elem, idx) {
            return <div key={idx}>
                <a href={elem.url} target='_blank'>
                    <div className='h-55 w-60 overflow-hidden rounded-2xl'>
                        <img src={elem.download_url} alt="" className='h-full w-full object-cover' />
                    </div>
                <h1 className='p-3 font-bold text-lg'>{elem.author}</h1>
                </a>
            </div>
        })
    }

    return (
        <div className='h-screen bg-black text-white overflow-auto'>
            <button
                onClick={getData}
                className='px-5 py-3 hover:bg-green-500 active:bg-green-600 bg-green-600 active:scale-95 rounded m-3 '>Get Data</button>
            <div className='flex flex-wrap gap-5 justify-between m-5 items-center'>
                {printUserData}
            </div>



        </div>
    )
}

export default GalleryApp
