import React, { useState } from 'react'
import './Login.css'
import Login from '../Images/Login.png';
import { Toaster } from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from "react-hot-toast";
import { getLocal } from "../helpers/auth";
import { useEffect } from 'react'

function SignupPage() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [age, setAge] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const [driving_license_number, setDriving_license_number] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useNavigate()

  useEffect(()=>{
    // console.log(response);
    const response = getLocal();
    if (response) {
      history('/')
    }
  })

  const signupSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        firstname,
        lastname,
        age,
        phone_number,
        driving_license_number,
        email,
        password
      })
    })

    // const content = await response.json()
    console.log(response);
    if(response.status === 400){
      toast.error('Enter some details')
      await history('/signup')
    }else{
      await history('/login')
    }    
  }
  return (
    <div className="main">
    <Toaster position="top-center" reverseOrder="false"></Toaster>

    <div
      className="container-scroller"
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${Login})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="row w-100 m-0">
          <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
            <div className="card col-lg-8 col-md-10 mx-auto">
              <div className="card-body px-5 py-5">
                <h3 className="card-title text-left mb-3">Signup</h3>
                <form onSubmit={signupSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          onChange={(e) => setFirstname(e.target.value)}
                          name="first_name"
                          className="form-control p_input"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="text"
                          onChange={(e) => setLastname(e.target.value)}
                          name="last_name"
                          className="form-control p_input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      onChange={(e) => setPhone_number(e.target.value)}
                      name="phone_number"
                      className="form-control p_input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Age</label>
                    <input
                      type="text"
                      onChange={(e) => setAge(e.target.value)}
                      name="age"
                      className="form-control p_input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Driving License Number</label>
                    <input
                      type="text"
                      onChange={(e) => setDriving_license_number(e.target.value)}
                      name="driving_license_number"
                      className="form-control p_input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Your Email</label>
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      className="form-control p_input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
                      className="form-control p_input"
                    />
                  </div>

                 
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block enter-btn">
                      Signup
                    </button>
                  </div>
                 
                  <p className="sign-up">
                    <Link to="/login">
                      Already have an Account?<a href="#"> Login</a>
                    </Link>
                  </p>
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

export default SignupPage;
