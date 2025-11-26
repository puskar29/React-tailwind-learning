import { useState } from "react"

function MyComponents(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery")

    function handlelNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange (event){
        setQuantity(event.target.value)
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    function handleShipping(event){
        setShipping(event.target.value)
    }

    return(
        <>
        <div>
            <input value={name} onChange={handlelNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" min={1} max={10} />
            <p>Quantity : {quantity}</p>

            <textarea name="" value={comment} onChange={handleCommentChange} id="" placeholder="Enter delivery instruction" cols={32} rows={7}></textarea>
            <p>Commment: {comment}</p>

            <select name="" id="" value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Paypal">Paypal</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label htmlFor="">
                <input type="radio" value="Pick Up"
                checked={shipping === "Pick Up"}
                onChange={handleShipping}
                 />
                Pick Up
            </label>
            <label htmlFor="">
                <input type="radio" value="Delivery"
                checked={shipping === "Delivery"}
                onChange={handleShipping}
                 />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
        </>
    )
}

export default MyComponents