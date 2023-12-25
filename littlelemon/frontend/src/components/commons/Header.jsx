import React from 'react'
import Navbar from './Navbar'
import Logo from '../../assets/Logo.svg'
import BasketLogo from '../../assets/Basket.svg'
import useScreenwidth from '../../hooks/useScreenwidth'
const Header = () => {
  const screenWidth=useScreenwidth();

  return (
    <header className='bg-[#FFFFFF] flex flex-row justify-around p-4 items-center fixed top-0 z-50 w-full '>
    {screenWidth>=1024&&  <img src={Logo} alt='Little Lemon Logo'/>}
<Navbar/>
<img className="lg:hidden" src={Logo} alt='Little Lemon Logo'/>

<img src={BasketLogo} alt='Basket Logo'/>
    </header> 

  )
}

export default Header
