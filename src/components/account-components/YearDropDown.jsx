import React from "react";

function YearDropDown({paymentForm, setPaymentForm}){
    const currentYear = new Date().getFullYear()

    const [yearOptionsptionsEl, setYearOptionsptionsEl] = React.useState([])
    React.useEffect(()=>{
        const tempArr = []
        for(let i=currentYear; i<currentYear+20; i++){
            tempArr.push(<option key={i} value={i}>{i}</option>)
        }
        setYearOptionsptionsEl(tempArr)
    },[])

    function handleChange(e){
        setPaymentForm((prev)=>{
            return{
                ...prev,
                expYear:e.target.value
            }
        })
    }

    return(
        <select
        id="yearDropdown" 
        name="expDate"
        value={paymentForm.expYear}
        onChange={()=>handleChange(event)}>
            {yearOptionsptionsEl}
        </select>

    )
}
export default YearDropDown