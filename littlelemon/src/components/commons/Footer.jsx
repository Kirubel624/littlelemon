import React from 'react'
import Logo from "../../assets/Logo.svg"
const Footer = () => {
  return (
    <footer className='flex flex-wrap font-karla justify-between items-star lg:items-start px-[20vw] pt-24 pb-10'>
     <aside className=' lg:w-[20vw] w-full'>
     <img className='pb-4' src={Logo}/>
      <p>We are a family owned Mediterranean restaurant,focused on traditional recipes with a  modern twist</p>
      </aside> 
      <aside className=' -red-900 flex flex-col items-center lg:items-start justify-center lg:flex-row lg:justify-between w-full lg:w-[30vw]'>
      <ul className='lg:pr-12 lg:pt-0 pt-8 flex flex-col lg:items-start items-center '>
        <li className='font-bold '>Doormat Navigation</li>
        <li className='py-2'>Home</li>
        <li className='pb-2'>About</li>
        <li className='pb-2'>Menu</li>
        <li className='pb-2'>Reservations</li>
        <li className='pb-2'>Order online</li>
        <li>Login</li>
      </ul>
      <ul className='lg:pr-12 lg:pt-0 pt-8 flex flex-col lg:items-start items-center'>
        <li className='font-bold'>Contact</li>
        <li className='py-2'>Address</li>
        <li className='pb-2'>Phone number</li>
        <li className='pb-2'>Email</li>
      </ul>
      <ul className='lg:pt-0 pt-8 flex flex-col lg:items-start items-center'>
        <li className='font-bold '>Social Media Links</li>
        <li className='py-2'>Address</li>
        <li className='pb-2'>Phone number</li>
        <li className='pb-2'>Email</li>
      </ul>
      </aside>
    </footer>
  )
}

export default Footer
