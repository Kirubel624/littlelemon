import React from 'react'
import Logo from "../../assets/Logo.svg"
const Footer = () => {
  return (
    <footer className='flex justify-between items-start px-[20vw] pt-24 pb-10'>
      <img src={Logo}/>
      <ul>
        <li className='font-bold'>Doormat Navigation</li>
        <li className='py-2'>Home</li>
        <li className='pb-2'>About</li>
        <li className='pb-2'>Menu</li>
        <li className='pb-2'>Reservations</li>
        <li className='pb-2'>Order online</li>
        <li>Login</li>
      </ul>
      <ul>
        <li className='font-bold'>Contact</li>
        <li className='py-2'>Address</li>
        <li className='pb-2'>Phone number</li>
        <li className='pb-2'>Email</li>
      </ul>
      <ul>
        <li className='font-bold'>Social Media Links</li>
        <li className='py-2'>Address</li>
        <li className='pb-2'>Phone number</li>
        <li className='pb-2'>Email</li>
      </ul>
    </footer>
  )
}

export default Footer
