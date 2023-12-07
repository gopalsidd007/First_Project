import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../StyleComponent/ViewProduct.css"
import { Link } from 'react-router-dom'



const ViewProduct = () => {

let [state,setState]=useState([])  
let travel_api="http://localhost:5000/Travel" 


const FeatchApi=()=>{
  axios.get(travel_api)
  .then(res=>{
    console.log("Featching data",res);
    setState(res.data)
  })
  .catch(err=>{
    console.log("Error data",err);
  })
}

useEffect(()=>{

  FeatchApi()
},[])

let deleteProduct=((id)=>{
  axios.delete(`${travel_api}/${id}`)
  .then(res=>{
    FeatchApi();
    alert("data deleted")
  })
  .catch(err=>{
    console.log("not deleted",err);
  })
})


  return (
    <div>
      <h1>Traveler DEtails</h1>

     <table>
      <thead>
       <td>Tourist Name</td>
       
       <td>Details</td>
       <td>Edit</td>
       <td>Delete</td>
      </thead>
      <tbody>
        {
          state.map(post=>(
            

            
            <>
            <tr key={post.id}>
              <td>{post.TouristName}</td>
              
              <td>
                <button>
                  <Link to={`details-product/${post.id}`}>Details</Link>
                  </button>
              </td>
              <td>
              <button>
                <Link to={`edit-product/${post.id}`}>Edit</Link>
              </button>
              </td>
              <td>
              <button  onClick={()=>deleteProduct(post.id)}>Delete</button>
              </td>
            </tr>
            </>
          
           ) )
        }
      </tbody>


     </table>
    </div>
  )
}

export default ViewProduct