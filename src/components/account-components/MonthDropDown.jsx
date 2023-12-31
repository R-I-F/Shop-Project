import React from "react"

function MonthDropDown({paymentForm, setPaymentForm}){

    function handleChange(e){
        setPaymentForm((prev)=>{
            return{
                ...prev,
                expMonth:e.target.value
            }
        })
    }

    return (
        <select 
        id="monthDropdown" 
        name="expDate"
        onChange={(event)=>handleChange(event)}
        value={paymentForm.expMonth}>
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </select>
    )
}
export default MonthDropDown