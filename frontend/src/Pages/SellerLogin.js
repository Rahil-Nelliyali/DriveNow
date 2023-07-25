import React from "react";
import './Sellerlogin.css'
import { Toaster } from 'react-hot-toast';
import Sellerlogin from '../Images/Sellerlogin.png';
import { Link, useNavigate } from 'react-router-dom';




function SellerLogin() {
 
  return (
    <div className="main" style={{
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${Sellerlogin})`,
      backgroundSize: 'cover',
    }} >
    <Toaster position='top-center' reverseOrder='false' ></Toaster>

    <div className="form-container">
        <div className="form">
          <span className="heading">Login As Seller</span>
          <input placeholder="Email" type="email" className="input" />
          <input placeholder="Password" id="mail" type="password" className="input" />
          
          <div className="button-container">
            <div className="send-button">Login</div>
            <div className="reset-button-container">
             <Link to='/sellersignup' ><div id="reset-btn" className="reset-button">Signup Here!</div></Link>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default SellerLogin;
