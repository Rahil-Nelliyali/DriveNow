import React from 'react'
import Navbar from '../Components/Navbar'
import { Toaster } from 'react-hot-toast'


function SellerHome() {
    return (
      <div>
          <Navbar/>
          <Toaster position='top-center' reverseOrder='false' ></Toaster>
      </div>
    )
  }
  
  export default SellerHome