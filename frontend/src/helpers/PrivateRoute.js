import React from "react";
import { getLocal } from "../helpers/auth";
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom";
import AdminHome from "../Pages/Adminhome";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";

const PrivateRoute = ({children, ...rest}) => {
    const response = getLocal('authToken');
    const history = useNavigate()
    console.log(response);
    if (response){
        const decoded = jwt_decode(response)

        if (decoded.is_superuser){
            console.log('admin');
            return <AdminHome/>
        } 
        else if (!decoded.is_superuser ){
            return <HomePage/>
        }
    }
    else{
        console.log('no token');
        return <LoginPage/>
        
    }
  
    

    

   
}

export default PrivateRoute;