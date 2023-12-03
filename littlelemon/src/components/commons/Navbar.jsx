import React from 'react'

const Navbar = () => {
  return (
    <>
     <nav>
        <ul className=' list-none flex flex-row justify-around items-center w-[]'>
            <li className='pr-4 font-karla text-lg'><a href="#home">Home</a></li>
            <li className='pr-4 font-karla text-lg'><a href='#about'>About</a></li>
            <li className='pr-4  font-karla text-lg'><a href='#menu'>Menu</a></li>
            <li className='pr-4  font-karla text-lg'><a href='#reservations'>Reservations</a></li>
            <li className='pr-4  font-karla text-lg'><a href='#orderonline'>Order Online</a></li>
            <li className='pr-4  font-karla text-lg'><a href='#login'>Login</a></li>
        </ul>
        </nav> 
    </>
  )
}

export default Navbar
