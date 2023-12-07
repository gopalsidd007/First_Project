import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import AddProduct from '../Product/AddProduct'

import ViewProduct from '../Product/ViewProduct'
import ApiPost from '../ApiPost/ApiPost'
import { Details } from '../Product/Details'
import EditProduct from '../Product/EditProduct'

const Routing = () => {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={<AddProduct/>}/>
           {/* ---------------product --------------  */}
            <Route path="view-product" element={<ViewProduct/>}/>
            <Route path="view-product/details-product/:id" element={<Details/>}/>
            <Route path="view-product/edit-product/:id" element={<EditProduct/>}/>
            
            
            <Route path="api-post" element={<ApiPost/>}/>
        </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Routing