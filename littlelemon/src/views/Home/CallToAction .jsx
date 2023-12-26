import React from 'react';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <>
      <section className='bg-[#495E57] w-full flex justify-between -red-900 items-center px-[20vw] py-10'>
        <div className='lg:w-[25vw] w-full  -green-900 flex flex-col justify-center item'>
          <h1 className=' font-markazi text-[3.25rem] leading-[0.8] text-[#F4CE14]'>Little Lemon</h1>
          <p className='text-white font-markazi text-3xl pb-4'>Chicago</p>
          <p className='text-white font-karla pb-8'>We are a family-owned Mediterranean restaurant, focused on traditional recipes with a modern twist</p>
          <Link className='bg-[#F4CE14] text-black px-4 py-2 rounded text-center' to="/booking" aria-label="Reserve a table">Reserve a table</Link>
        </div>
        <div className='static  -red-900 flex justify-center items-'>
          <img className='lg:block hidden w-[300px] rounded-xl object-cover h-[335px] absolute right-[20vw] top-[8rem]' src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1701453328/pbygrd9a1r6puekc3x2y.jpg" alt="Little Lemon Restaurant" aria-hidden="true" />
        </div>
      </section>
    </>
  );
};

export default CallToAction;
