import { useState } from "react"

function ListItems() {
    const [foods, setFoods] = useState(["Apple", "Banana", "Mango"]);
    function handleAddFood(){
        const newFood = document.getElementById("food-input").value;
        document.getElementById("food-input").value = "";

        setFoods( f => [...f, newFood])
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((element, i) => i !== index))
    }

    return (
        <>
            <div>
                <h2>List of Food</h2>
                <ul>
                    {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)} >{food}</li>)}
                </ul>
                <input type="text" name="" id="food-input" placeholder="Enter food name" />
                <button onClick={handleAddFood}>Add Food </button>
            </div>
        </>
    )
}

export default ListItems