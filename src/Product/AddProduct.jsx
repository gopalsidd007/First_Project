import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function AddProduct() {
  
  let [travel,setTravel]=useState({"tname":"","loc":"","vac":"","trip":""})
  let navigate=useNavigate()

  let changeHandle=(event)=>{
    let {name,value}=event.target
    setTravel({...travel,[name]:value})
  }

  let travel_api="http://localhost:5000/Travel"
  
let submitHandle=(event)=>{
  event.preventDefault();
  console.log("Submited value",travel);

  let traveldata={
    TouristName:travel.tname,
    Location:travel.loc,
    Vacation:travel.vac,
    Trip:travel.trip
  }

  axios.post(travel_api,traveldata)
  .then(res=>{
    console.log("register data");
    alert("data added")
    navigate('/view-product')
    
  })
  .catch(err=>{
    console.log("err",err);
  })

  }
  
  return (
    <div>
      <h1>AddProduct</h1>

      <form action="" onSubmit={submitHandle}>
        <label htmlFor="">Tourist Name</label>
        <input type="text"  name="tname"  
        onChange={changeHandle}/>
        <label htmlFor="">Location</label>
        <input type="text"  name="loc" 
        onChange={changeHandle}/>
        <label htmlFor="">Vacation</label>
        <input type="text" name="vac"
         onChange={changeHandle} />
        <label htmlFor="">Trip</label>
        <input type="text" name="trip"
         onChange={changeHandle}/>

      <button type='submit'>Enjoy</button>   
      </form>
    </div>
  )
}

export default AddProduct