import React from "react";
import './Login.css'
import Signup from '../Images/Signup.png';
import { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import login from '../helpers/auth';
import { updateAuthToken,updateUser } from '../redux/AuthContext';
import jwt_decode from "jwt-decode"
import { getLocal } from "../helpers/auth";

function LoginPage() {

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
    <div className="main" >
    <Toaster position='top-center' reverseOrder='false' ></Toaster>

    <div className="container-scroller" style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${Signup})`,
        backgroundSize: 'cover',
      }}>
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="row w-100 m-0">
        <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
          <div className="card col-lg-4 mx-auto">
            <div className="card-body px-5 py-5">
              <h3 className="card-title text-left mb-3">Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" className="form-control p_input" name="username" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control p_input" name="password"/>
                </div>
                <div className="form-group d-flex align-items-center justify-content-between">
                 
                  <a href="#" className="forgot-pass">Forgot password ?</a>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-block enter-btn">Login</button>
                </div>
                <div className="d-flex">
                <Link to='/sellerlogin'><button class="btn btn-facebook mr-2 col">
                <i class="mdi mdi-facebook"></i> Want to be a seller? </button></Link>
                  <button className="btn btn-google col">
                    <i className="mdi mdi-google-plus"></i> Login with Google
                  </button>
                </div>
                <p className="sign-up"  > <Link to='/signup'>Don't have an Account?<a href="#"> Sign Up</a></Link></p>
              </form>
            </div>
          </div>
        </div>
        {/* content-wrapper ends */}
      </div>
      {/* row ends */}
    </div>
    {/* page-body-wrapper ends */}
  </div>
   
    </div>
  );
}

export default LoginPage;
