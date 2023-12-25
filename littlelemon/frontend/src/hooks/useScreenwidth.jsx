import React, { useEffect, useState } from 'react'

const useScreenwidth = () => {
  const [screenWidth, setScreenWidth]=useState(window.innerWidth)
  
  useEffect(()=>{
    const handleResize=()=>{
     if(window.innerWidth<=1024){
       setScreenWidth(window.innerWidth)
     }else{
       setScreenWidth(window.innerWidth)
     }
    }
    window.addEventListener('resize', handleResize)
    return ()=>{
     window.removeEventListener('resize', handleResize)
    }
     },[])
  return screenWidth;
}

export default useScreenwidth
