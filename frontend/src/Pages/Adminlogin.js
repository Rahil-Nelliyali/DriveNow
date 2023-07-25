import React from "react";
import { Toaster } from 'react-hot-toast';
import './adminlogin.css'
import { useEffect } from 'react'
import login from '../helpers/auth';
import { updateAuthToken,updateUser } from '../redux/AuthContext';
import jwt_decode from "jwt-decode"
import { getLocal } from "../helpers/auth";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import HomePage from "./HomePage";
import AdminHome from "./Adminhome";
import LoginPage from "./LoginPage";

function AdminLogin() {
    const history = useNavigate()
    const dispatch = useDispatch()
    
    useEffect(()=>{
      // console.log(response);
      const response = getLocal();
      if (response) {
        const decoded = jwt_decode(response)
        if (decoded.is_superuser){
          
          history('/adminhome')
      } 
        
      }
    })

   

    const handleSubmit = async(e)=> {
      e.preventDefault()
      const response = await login(e);
      if (response){
        history('/adminhome')
      }
      const decoded = jwt_decode(response.access)
      dispatch(updateUser(decoded));
      dispatch(updateAuthToken(response))
    }
  
    
  return (
    <div className="main"  >
    <Toaster position='top-center' reverseOrder='false' ></Toaster>

    <div className="form-container">
    <h1>Admin Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="username" required />
        </div>
        <div className="form-group">
        <label htmlFor="email">Password</label>
        <input type="password" id="email" name="password" required />
      </div>
        
        <button className="form-submit-btn" type="submit">
          Login
        </button>
      </form>
    </div>
   
    </div>
  );
}

export default AdminLogin;
