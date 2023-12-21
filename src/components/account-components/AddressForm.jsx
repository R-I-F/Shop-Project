import React from "react";
import Select from "react-select"
import { fireBaseContext } from "../../FireBase/FireBaseProvider";

function AddressForm(){
    const [addressformData, setAddressFormData] = React.useState({
        country: "" ,
        city: "" ,
        street: "" ,
        landedHouse: false ,
        apartment: false,
        postalCode: "" ,
        buildingNo: "" ,
        apartmentNo: "" ,
        phone: "",
        isSelected: false,
    })
    const [countries, setCountries] = React.useState([])
    const [selectedCountry, setSelectedCountry] = React.useState({})
    const [error, setError] = React.useState("")
    const addUserAddress = React.useContext(fireBaseContext).addUserAddress

    const labelClassName = `col-lg-3 col-5`;
    const inputClassName = `col-lg-8 col-5`;

    React.useEffect(()=>{
        fetch(
            "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
          )
            .then((response) => response.json())
            .then((data) => {
                setCountries(data.countries);
                setSelectedCountry(data.userSelectValue);
            });
    },[])

    function handleChange(e){
        if(e.target.id === "city"){
            setAddressFormData((prev)=>{return{
                ...prev,
                city: e.target.value
            }})
        }
        else if(e.target.id==="street"){
            setAddressFormData((prev)=>{return{
                ...prev,
                street: e.target.value
            }})
        }
        else if(e.target.id==="street"){
            setAddressFormData((prev)=>{return{
                ...prev,
                street: e.target.value
            }})
        }
        else if(e.target.id==="postal-code"){
            setAddressFormData((prev)=>{return{
                ...prev,
                postalCode: e.target.value
            }})
        }
        else if(e.target.id ==="building-number"){
            setAddressFormData((prev)=>{return{
                ...prev,
                buildingNo: e.target.value
            }})
        }
        else if(e.target.id === "apartment-number"){
            setAddressFormData((prev)=>{return{
                ...prev,
                apartmentNo: e.target.value
            }})
        }
        else if(e.target.id === "phone-number"){
            setAddressFormData((prev)=>{return{
                ...prev,
                phone: e.target.value
            }})
        }
    }

    function handleRadioChange(type){
        setAddressFormData((prev)=>{return{
            ...prev,
            landedHouse: type === "landed-house",
            apartment: type === "apartment"
        }})

    }

    function clearFormFields(){
        setAddressFormData({
            country: "" ,
            city: "" ,
            street: "" ,
            landedHouse: false ,
            apartment: false,
            postalCode: "" ,
            buildingNo: "" ,
            apartmentNo: "" ,
            phone: "",
            isSelected: false
            })
      }

    function handleSubmitForm(e){
        e.preventDefault()
        setError('')
        if(areAllFieldsFilled(addressformData)){
            addUserAddress(addressformData)
            clearFormFields()
        }
        else{
            setError('some fields are empty')
        }
    }

    function areAllFieldsFilled(obj) {
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            // Skip checking apartmentNo if landedHouse is true
            if (key === 'apartmentNo' && obj['landedHouse']) {
              continue;
            }
      
            if (obj[key] === "" || obj[key] === null || obj[key] === undefined) {
              return false;
            }
          }
        }
        return true;
      }

    return(
        <form className="address-form">
                <div className="m-2 row gy-3">                
                    <div className="col-12">
                        <div className="row">
                            <label 
                            htmlFor="country"
                            className={labelClassName}
                            >Country</label> 
                            <Select
                            className={inputClassName}
                            id="country"
                            options={countries}
                            value={selectedCountry}
                            onChange={(selectedOption) => {
                                setSelectedCountry(selectedOption)
                                setAddressFormData((prev)=>{return{
                                    ...prev,
                                    country: selectedOption
                                }})
                            }}
                            />
                        </div>                
                    </div>

                    <div className="col-12">
                        <div className="row">
                            <label 
                            htmlFor="city"
                            className={labelClassName}
                            >City/State</label> 
                            <input 
                            className={inputClassName}
                            type="text" 
                            name="address-form" 
                            id="city"
                            onChange={()=>handleChange(event)}
                            value={addressformData.city}
                            />
                        </div>
                    </div>

                    <div className="col-12">   
                        <div className="row">
                            <label 
                            htmlFor="street"
                            className={labelClassName}
                            >Street</label> 
                            <input 
                            className={inputClassName}
                            type="text" 
                            name="address-form" 
                            id="street"
                            onChange={()=>handleChange(event)}
                            value={addressformData.street}
                            />
                        </div>             
                    </div>

                    <div className="building-type col-12">    
                        <div className="landed-house">
                            <input
                            type="radio"
                            name="address-form"
                            id="landed-house"
                            checked={addressformData.landedHouse}
                            onChange={()=>handleRadioChange("landed-house")}
                            />
                            <label 
                            htmlFor="type"
                            >Landed house</label>
                        </div> 


                        <div className="apartment">                        
                            <input
                            type="radio"
                            name="address-form"
                            id="apartment"
                            checked={addressformData.apartment}
                            onChange={()=>handleRadioChange("apartment")}
                            />
                            <label 
                            htmlFor="type"
                            >Apartment</label>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="row">
                            <label 
                            htmlFor="postal-code"
                            className={labelClassName}
                            >Postal code</label> 
                            <input 
                            className={inputClassName}
                            type="text" 
                            name="address-form" 
                            id="postal-code"
                            onChange={()=>handleChange(event)}
                            value={addressformData.postalCode}
                            />
                        </div> 
                    </div>

                    <div className="col-12">
                        <div className="row">
                            <label 
                            htmlFor="building-number"
                            className={labelClassName}
                            >Building number</label> 
                            <input 
                            className={inputClassName}
                            type="text" 
                            name="address-form" 
                            id="building-number"
                            onChange={()=>handleChange(event)}
                            value={addressformData.buildingNo}
                            />
                        </div> 
                    </div>

                    <div className="col-12">
                        <div className="row">
                            <label 
                            htmlFor="apartment-number"
                            className={labelClassName}
                            >Apartment number</label> 
                            <input 
                            className={inputClassName}
                            type="text" 
                            name="address-form" 
                            id="apartment-number"
                            onChange={()=>handleChange(event)}
                            value={addressformData.apartmentNo}
                            />
                        </div> 
                    </div>

                    <div className="col-12">
                        <div className="row">
                            <label 
                            htmlFor="phone-number"
                            className={labelClassName}
                            >Phone number</label> 
                            <input 
                            className={inputClassName}
                            type="text" 
                            name="address-form" 
                            id="phone-number"
                            onChange={()=>handleChange(event)}
                            value={addressformData.phone}
                            />
                        </div> 
                    </div>

                    {error.length>0 && <div className="col-12">
                        <div className="row">
                            <p>{error}</p>
                        </div> 
                    </div>}

                    <div className="col-12">
                        <button
                        className="submit-btn"
                        onClick={()=>handleSubmitForm(event)}
                        >
                            Submit Address
                        </button>
                    </div>
                </div>
            </form>
    )
}

export default AddressForm