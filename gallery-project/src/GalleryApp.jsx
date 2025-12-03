import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const GalleryApp = () => {

    const [userData, setUserData] = useState([])
    const [index, setIndex] = useState(1);

    const getData = async () => {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`);

        setUserData(response.data)
        console.log(response.data);
    }

    useEffect(function(){
        getData()
    }, [index])

    let printUserData = <h3 className='text-xs text-gray-300 absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2'>Loading..</h3>;

    if (userData.length > 0) {
        printUserData = userData.map(function (elem, idx) {
            return <div key={idx}>
                <Card elem={elem}/>
            </div>
        })
    }

    return (
        <div className='h-screen bg-black text-white overflow-auto p-3'>
            {/* <button
                onClick={getData}
                className='px-5 py-3 hover:bg-green-500 active:bg-green-600 bg-green-600 active:scale-95 rounded m-3 '>Get Data</button> */}
            <div className='flex lg:h-[80%] flex-wrap gap-5 justify-between m-5 items-center'>
                {printUserData}
            </div>

            <div className='flex justify-center items-center gap-6 p-4'>
                <button 
                style={{opacity: index == 1 ? 0.5: 1}}
                className='bg-blue-600 text-white px-3 py-2 rounded font-semibold cursor-pointer active:bg-blue-600 hover:bg-blue-500 ' onClick={() =>{
                    if(index > 1){
                        setIndex(index-1)
                        setUserData([])
                    }
                }}>Previous</button>

                <h4 className='text-xs'>Page {index}</h4>
                <button className='bg-blue-600 text-white px-3 py-2 rounded font-semibold cursor-pointer active:bg-blue-600 hover:bg-blue-500 ' onClick={() => {
                    setIndex(index+1)
                    setUserData([])
                }}>Next</button>
            </div>
        </div>
    )
}

export default GalleryApp
