import React , { useState } from "react";
import './Sellerlogin.css'
import { Toaster } from 'react-hot-toast';
import Sellerlogin from '../Images/Sellerlogin.png';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from "react-hot-toast";
import { getLocal } from "../helpers/auth";
import { useEffect } from 'react'

function SellerSignup() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [age, setAge] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const [adhar_card_number, setAdhar_card_number] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useNavigate()

  useEffect(()=>{
    // console.log(response);
    const response = getLocal();
    if (response) {
      history('/sellerhome')
    }
  })

  const signupSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:8000/api/seller-register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        firstname,
        lastname,
        age,
        phone_number,
        adhar_card_number,
        email,
        password
      })
    })

    // const content = await response.json()
    console.log(response);
    if(response.status === 400){
      toast.error('Enter some details')
      await history('/sellersignup')
    }else{
      await history('/sellerlogin')
    }    
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
        <form className="form" onSubmit={signupSubmit}>
          <span className="heading">Signup As Seller</span>
          <input placeholder="First Name" type="text" className="input" name="first_name"  onChange={(e) => setFirstname(e.target.value)}/>
          <input placeholder="Last Name" type="text" className="input" name="last_name" onChange={(e) => setLastname(e.target.value)}/>
          <input placeholder="Email" id="mail" type="email" className="input" name="email" onChange={(e) => setEmail(e.target.value)}/>
          <input placeholder="Phone Number" type="text" className="input" name="phone_number" onChange={(e) => setPhone_number(e.target.value)}/>
          <input placeholder="Age" type="text" className="input" name="age" onChange={(e) => setAge(e.target.value)}/>
          <input placeholder="Adhaar Card Number" type="text" className="input" name="adhar_card_number" onChange={(e) => setAdhar_card_number(e.target.value)}/>
          <input placeholder="Password" type="text" className="input" name="password" onChange={(e) => setPassword(e.target.value)} />


          <div className="button-container">
          <button type="submit"><div className="send-button">Signup</div></button>
            <div className="reset-button-container">
            <Link to='/sellerlogin' ><div id="reset-btn" className="reset-button">Login Here!</div></Link>
            </div>
          </div>
        </form>
      </div>
   
    </div>
  );
}

export default SellerSignup;
