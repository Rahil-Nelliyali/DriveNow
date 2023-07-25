import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import { Toaster } from 'react-hot-toast'
import ApproveSeller from '../Components/ApproveSeller'

function AdminSellerApprove() {
    return (
      <div >
          <AdminNavbar/>
          <Toaster position='top-center' reverseOrder='false' ></Toaster>
          <ApproveSeller/>
      </div>
    )
  }
  
  export default AdminSellerApprove