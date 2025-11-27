import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Product = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios({
            method: "GET",
            url: 'https://fakestoreapi.com/products',
        })
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {loading && (
                <div>
                    {""}
                    <p>Loading...</p>
                </div>
            )}

            <div className="container mx-auto p-6">
                <div className='flex flex-wrap gap-6 justify-center'>
                    {data.map((product) => (
                        <div className="flex flex-col items-center p-6 bg-white roundex-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-300 w-80 rounded-md" key={product.id}>
                            <div className='mb-3 w-full flex justify-center'>
                                <img src={product.image} alt="#" className='w-48 h-48 object-contain' /></div>
                                <div className="flex flex-col items-center text-center w-full">
                                    <h3 className="font-bold text-lg mb-2 line-clamp-2 leading-tight">{product.title}</h3>
                                    <p className="text-xl font-bold text-blue-600 mb-3">${product.price}</p>
                                    <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">{product.description}</p>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product
