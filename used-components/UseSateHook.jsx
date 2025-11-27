import { useEffect } from "react"
import { useState } from "react"

function UseSatateHook(){
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green", "red")

    useEffect(() => {
        document.title = `Count: ${count} ${color} `
    }, [count, color])
    function addCount(){
        setCount(c => c + 1)
    }

    function subCount(){
        setCount(c => c - 1)
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")
    }
    return(
        <>
        <div>
            <p style={{color : color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Subtract</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
        </>
    )
}

export default UseSatateHook