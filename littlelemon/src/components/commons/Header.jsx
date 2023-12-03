import React from 'react'
import Navbar from './Navbar'
import Logo from '../../assets/Logo.svg'
import BasketLogo from '../../assets/Basket.svg'
const Header = () => {
  return (
    <header className='flex flex-row justify-around p-8 items-center'>
      <img src={Logo} alt='Little Lemon Logo'/>
<Navbar/>
<img src={BasketLogo} alt='Basket Logo'/>
    </header> 

  )
}

export default Header
