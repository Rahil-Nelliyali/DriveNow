import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import { Toaster } from 'react-hot-toast'
import AdminDashboard from '../Components/AdminDashboard'

function AdminHome() {
    return (
      <div >
          <AdminNavbar/>
          <Toaster position='top-center' reverseOrder='false' ></Toaster>
          <AdminDashboard/>
      </div>
    )
  }
  
  export default AdminHome