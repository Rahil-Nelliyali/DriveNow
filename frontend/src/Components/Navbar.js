import React from 'react'
import Logo from '../Images/Logo.png';
import './Navbar.css'
import { getLocal } from '../helpers/auth';
import jwt_decode from "jwt-decode"
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const {email} = jwt_decode(getLocal())
  const history = useNavigate()
  const logout = ()=>{
    localStorage.removeItem('authToken')
    history('/login')
  }
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
                                    <li className="logo-item">
    <img src={Logo} alt="Logo" className="logo-image" style={{height:'40px'}}/>
  </li>
                                        <li>Home</li>
                                        <li>Cars</li>
                                        <li>Profile</li>
                                        <li>Bookings 
                                           
                                        </li>
                                        
                                        <li>Contact</li>
                                        <li>Book A Ride</li>
                                        <li>   {email && <button className="logout-button" onClick={logout}>
                                        <span>Logout</span> <span></span>
                                        </button>}</li>
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

export default Navbar