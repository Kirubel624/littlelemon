import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {Outlet, Navigate} from 'react-router-dom'

const PrivateRoutes=()=>{
    let auth={'token':false}
   const authToken = localStorage.getItem('token')
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

   const[token,setToken]=useState(authToken)
   useEffect(()=>{
    setToken(authToken)
   },[token])
    return(
        token&&isLoggedIn?<Outlet/>:<Navigate to="/login"/>
    )
}

export default PrivateRoutes