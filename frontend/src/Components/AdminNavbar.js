import React from 'react'
import './Navbar.css'

function AdminNavbar() {
  return (
    <div className='main-nav'>
    <header>
        <div className="header-area  " >
            <div id="sticky-header" className="main-header-area">
                <div className="container-fluid p-0">
                    <div className="row align-items-center no-gutters">
                        <div className="col-xl-5 col-lg-6">
                            <div className="main-menu  d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                          
                                        <li>Dashboard</li>
                                        <li>User Details</li>
                                        <li>Approve Sellers</li>
                                        <li>Seller Details</li>
                                    </ul>
                                    
                                </nav>
                            </div>
                        </div>
                       
                       
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </div>
   
  )
}

export default AdminNavbar