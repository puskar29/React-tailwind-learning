import { useState } from "react"

function MyComp(){
    const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"});

    function handelYearChange(event){
        setCar(c => ({...c, year: event.target.value}))
    }
    function handelMakeChange(event){
        setCar(c => ({...c, make: event.target.value}))
    }
    function handelModelChange(event){
        setCar( c => ({...c, model: event.target.value}))
    }
    return (
        <>
        <p>Your favourite car id: {car.year} {car.make} {car.model}</p>
        <input type="number" name="" id="" value={car.year} onChange={handelYearChange} /><br />
        <input type="text" name="" id="" value={car.make} onChange={handelMakeChange} /><br />
        <input type="text" name="" id="" value={car.model} onChange={handelModelChange} /><br />
        </>
    )
}


export default MyComp