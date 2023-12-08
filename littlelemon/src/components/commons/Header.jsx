import React from 'react'
import Navbar from './Navbar'
import Logo from '../../assets/Logo.svg'
import BasketLogo from '../../assets/Basket.svg'
const Header = () => {
  return (
    <header className='bg-[#FFFFFF] flex flex-row justify-around p-4 items-center fixed top-0 z-50 w-full '>
      <img src={Logo} alt='Little Lemon Logo'/>
<Navbar/>
<img src={BasketLogo} alt='Basket Logo'/>
    </header> 

  )
}

export default Header
