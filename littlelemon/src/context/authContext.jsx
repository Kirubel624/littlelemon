import { createContext, useContext, useState } from "react";

const UserContext=createContext(null)



export const AuthProvider=({children})=>{

const[isLoggedIn,setIsLoggedIn]=useState()
const handleRegister=(username,email,password)=>{
    console.log("inside handle register in context");

    // localStorage.setItem('username',username)
    // localStorage.setItem("email", email);
    // localStorage.setItem("password", password);
}
const handleLogin=()=>{
    console.log("inside handle login in context")
    // localStorage.setItem('isLoggenIn',true)
    // setIsLoggedIn(true)
}
const handleLogOut=()=>{
localStorage.removeItem("username");
localStorage.removeItem("email");
localStorage.removeItem("password");
setIsLoggedIn(false)
}
return(
<UserContext.Provider value={{isLoggedIn, handleLogin, handleLogOut, handleRegister}}>
{children}
</UserContext.Provider>
)


}
export const useUserContext=()=>useContext(UserContext)
