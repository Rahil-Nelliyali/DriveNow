import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import SignupPage from './Pages/SignupPage';
import Cars from './Pages/Cars';
import SellerLogin from './Pages/SellerLogin';
import SellerHome from './Pages/Sellerhome';
import SellerSignup from './Pages/SellerSignup';
import AdminLogin from './Pages/Adminlogin';
import AdminHome from './Pages/Adminhome';
import AdminSellerApprove from './Pages/AdminSellerApprove';
import AdminSellerDetails from './Pages/AdminSellerDetails';
import AdminUserDetails from './Pages/AdminUserDetails';

function App() {
  return (
    <div className="App">
    <Router>
        
        <Routes>
          <Route Component={LoginPage} path='/login'/>
          <Route Component={SignupPage} path='/signup'/>
          <Route Component={HomePage} path='/'/>
          <Route Component={Cars} path='/cars'/>

          <Route Component={SellerLogin} path='/sellerlogin'/>
          <Route Component={SellerSignup} path='/sellersignup'/>
          <Route Component={SellerHome} path='/sellerhome'/>
         
          <Route Component={AdminLogin} path='/adminlogin'/>
          <Route Component={AdminHome} path='/adminhome'/>
          <Route Component={AdminUserDetails} path='/userdetails'/>
          <Route Component={AdminSellerDetails} path='/sellerdetails'/>
          <Route Component={AdminSellerApprove} path='/approveseller'/>

 
        </Routes>

      </Router>
    
    </div>
  );
}

export default App;
