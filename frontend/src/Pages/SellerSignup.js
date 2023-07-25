import React from "react";
import './Sellerlogin.css'
import { Toaster } from 'react-hot-toast';
import Sellerlogin from '../Images/Sellerlogin.png';
import { Link, useNavigate } from 'react-router-dom';

function SellerSignup() {
 
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
          <span className="heading">Signup As Seller</span>
          <input placeholder="Name" type="text" className="input" />
          <input placeholder="Email" id="mail" type="email" className="input" />
          <input placeholder="Phone Number" type="text" className="input" />
          <input placeholder="GSTin if any" type="text" className="input" />
          

          <div className="button-container">
            <div className="send-button">Signup</div>
            <div className="reset-button-container">
            <Link to='/sellerlogin' ><div id="reset-btn" className="reset-button">Login Here!</div></Link>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default SellerSignup;
