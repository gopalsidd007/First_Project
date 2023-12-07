import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

export const Details = () => {
let {id}=useParams()
console.log("received travele data",id);

let travel_api="http://localhost:5000/Travel" 
let [travel,setTravel]=useState({"tname":"","loc":"","vac":"","trip":""})

let featchDetails=()=>{
    axios.get(`${travel_api}/${id}`)
    .then(res=>{
        setTravel(res.data)
    })
    .catch(err=>{
        console.log("data not fatched",err);
    })
}

useEffect(()=>{
    featchDetails();
},[])



featchDetails()

  return (
    <div>
        <h1>Traveler Detais</h1>
        <table>
            <thead>
                <td>Tourist Name</td>
                <td>Location</td>
                <td>Vacation</td>
                <td>Trip</td>
            </thead>
            <tbody>
                <td>{travel.TouristName}</td>
                <td>{travel.Location}</td>
                <td>{travel.Vacation}</td>
                <td>{travel.Trip}</td>
            </tbody>
        </table>
    </div>
  )
}
