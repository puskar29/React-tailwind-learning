import React, { useState } from 'react'
import { X } from 'lucide-react';

const NoteApp = () => {

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [task, setTask] = useState([]);
    const [error, setError] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        if(!title.trim() || !details.trim()){
            setError("Please fill both Title and Details! ");
            return;
        }
        setError('');

        const copyTask = [...task];
        copyTask.push({ title, details });

        setTask(copyTask);
        setTitle('');
        setDetails('');
    };

    const deleteNote = (idx) => { 
        const copyTask = [...task];
        copyTask.splice(idx, 1);
        setTask(copyTask)
    }

    return (
        <div className="h-screen lg:flex bg-black text-[#EFECE3]">

            {/* Left Form Section */}
            <form
                className="flex p-10 items-start gap-5 flex-col lg:w-1/2"
                onSubmit={submitHandler}
            >
                <h1 className="text-4xl font-bold">Add Notes:</h1>

                <input
                    type="text"
                    placeholder="Enter Notes Heading"
                    className="px-5 py-3 border-2 w-full text-xl border-[#4A70A9] rounded placeholder:text-[#EFECE3]"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Enter Details"
                    className="h-60 py-3 px-5 border-[#4A70A9] w-full border-2 rounded text-xl placeholder:text-[#EFECE3]"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                ></textarea>

                {error && (
                    <p className="text-red-600 text-sm p-0 m-0">{error}</p>
                )}

                <button className="bg-[#4A70A9] text-xl px-3 py-3 rounded w-full hover:bg-[#4475be] active:bg-[#4A70A9] cursor-pointer">
                    Add Notes
                </button>
            </form>

            {/* Right Notes Section */}
            <div className="p-10 lg:w-1/2 lg:border-l-2 flex flex-col bg-black">

                <h1 className="text-4xl font-bold mb-2">Recent Notes:</h1>

                {/* SCROLLING NOTES BOX */}
                <div className="flex-1 lg:overflow-y-auto p-2 lg:pr-3">
                    {task.map((elem, idx) => (
                        <div
                            key={idx}
                            className="w-full flex items-center relative bg-[#EFECE3] p-4 absolu rounded-xl mb-5 text-black"
                        >
                            <h1 className="text-4xl font-bold bg-[#8FABD4] p-4 rounded-lg mr-4">
                                {idx + 1}
                            </h1>

                            <div className="flex flex-col items-start">
                                <div>
                                    <h3 className="text-2xl font-bold">{elem.title}</h3>
                                    <p className="text-sm">{elem.details}</p>
                                </div>
                            </div>
                                <button className='bg-[#e23838] cursor-pointer hover:bg-[#f35656] active:bg-[#e23838] font-bold text-white  absolute top-6 right-4 r-0 p-4 rounded-lg' onClick={() =>{
                                    deleteNote(idx)
                                }}><X/></button>
                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default NoteApp
