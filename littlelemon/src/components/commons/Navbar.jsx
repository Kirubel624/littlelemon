import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <nav>
        <ul className=' list-none flex flex-row justify-around items-center w-[] '>
        <Link to="/"> <li className='pr-4 font-karla text-lg'>Home</li></Link>
            <li className='pr-4 font-karla text-lg'><a href='#about'>About</a></li>
            <li className='pr-4  font-karla text-lg'><a href='#menu'>Menu</a></li>
          <Link to="/booking">  <li className='pr-4  font-karla text-lg'>Reservations</li></Link>
            <li className='pr-4  font-karla text-lg'><a href='#orderonline'>Order Online</a></li>
            <li className='pr-4  font-karla text-lg'><a href='#login'>Login</a></li>
        </ul>
        </nav> 
    </>
  )
}

export default Navbar
