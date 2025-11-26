function Button() {
    // let count = 0;
    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} click me ${count} times.`)
    //     }
    //     else {
    //         console.log(`${name} stop clicking me`)
    //     }
    // }

    // return (
    //     <>
    //         <button onClick={() => handleClick("Tim")}>Click Me</button>
    //     </>
    // )

    const handleClick = (e) => e.target.textContent = 'Ouch!'

    return (
        <>
            <button onDoubleClick={(e) => handleClick(e)}>Click Me</button>

        </>
    )
}

export default Button