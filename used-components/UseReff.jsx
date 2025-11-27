import { useEffect, useRef, useState } from "react"

function UseReff() {
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    useEffect(() => {
        console.log("Componenet Render")
    })

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }

     function handleClick2() {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = "yellow"
        inputRef3.current.style.backgroundColor = ""
    }

     function handleClick3() {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = "yellow"
    }

    // const [input1Focus, setInput1Focus] = useState(false)
    // const [input2Focus, setInput2Focus] = useState(false)
    // const [input3Focus, setInput3Focus] = useState(false)

    // useEffect(() => {
    //     console.log("Component Rendered")
    // })

    // function handleClickButton(inputNumber){
    //     setInput1Focus(inputNumber === 1)
    //     setInput2Focus(inputNumber === 2)
    //     setInput3Focus(inputNumber === 3)
    // }
    return (
        <>
            <div>
                <button onClick={handleClick1}>Click Me 1</button>
                <input ref={inputRef1} />

                <button onClick={handleClick2}>Click Me 2</button>
                <input ref={inputRef2} />

                <button onClick={handleClick3}>Click Me 3</button>
                <input ref={inputRef3} />

                {/* <button onClick={handleClickButton(1)}>Click me 1</button>
                <input ref={inputRef => {
                    if(inputRef){
                        if(input1Focus){

                        }
                    }
                }} /> */}
            </div>
        </>
    )
}

export default UseReff