import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import { Toaster } from 'react-hot-toast'

function AdminUserDetails() {
    return (
      <div >
          <AdminNavbar/>
          <Toaster position='top-center' reverseOrder='false' ></Toaster>
          <h1>User Details</h1>
      </div>
    )
  }
  
  export default AdminUserDetails