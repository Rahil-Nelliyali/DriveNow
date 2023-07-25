import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import { Toaster } from 'react-hot-toast'

function AdminSellerDetails() {
    return (
      <div >
          <AdminNavbar/>
          <Toaster position='top-center' reverseOrder='false' ></Toaster>
          <h1>Seller Details</h1>
      </div>
    )
  }
  
  export default AdminSellerDetails