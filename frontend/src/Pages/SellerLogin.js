import React from "react";
import './Sellerlogin.css'
import { Toaster } from 'react-hot-toast';
import Sellerlogin from '../Images/Sellerlogin.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import login from '../helpers/auth';
import { updateAuthToken,updateUser } from '../redux/AuthContext';
import jwt_decode from "jwt-decode"
import { getLocal } from "../helpers/auth";




function SellerLogin() {
  const history = useNavigate()
  const dispatch = useDispatch()
  
  useEffect(()=>{
      // console.log(response);
      const response = getLocal();
      if (response) {
        history('/')
      }
    })

    const handleSubmit = async(e)=> {
      e.preventDefault()
      const response = await login(e);
      if (response){
        history('/')
      }
      const decoded = jwt_decode(response.access)
      dispatch(updateUser(decoded));
      dispatch(updateAuthToken(response))
    }

  return (
    <div className="main" style={{
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${Sellerlogin})`,
      backgroundSize: 'cover',
    }} >
    <Toaster position='top-center' reverseOrder='false' ></Toaster>

    <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <span className="heading">Login As Seller</span>
          <input placeholder="Email" type="email" className="input" name="username" />
          <input placeholder="Password" id="mail" type="password" className="input" name="password" />
          
          <div className="button-container">
          <button type="submit"><div className="send-button">Login</div></button>
            <div className="reset-button-container">
             <Link to='/sellersignup' ><div id="reset-btn" className="reset-button">Signup Here!</div></Link>
            </div>
          </div>
        </form>
      </div>
   
    </div>
  );
}

export default SellerLogin;
