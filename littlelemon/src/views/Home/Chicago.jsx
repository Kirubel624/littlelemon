import React from 'react';

const Chicago = () => {
  return (
    <section className='py-24 px-[20vw] flex' aria-label="About Little Lemon in Chicago">
      <div className='pr-6'>
        <h1 className='font-markazi text-[3.25rem] leading-[0.8]' aria-label="Little Lemon">Little Lemon</h1>
        <p className='font-markazi text-3xl pb-4'>Chicago</p>
        <p className='font-karla' aria-label="Description about Little Lemon in Chicago">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div className='w-' aria-hidden="true">
        <img className='hidden lg:block object-cover h-full' src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1701684970/jnatcrxa3sxjppcjpeeh.png" alt="Little Lemon Chicago"/>
      </div>
    </section>
  );
};

export default Chicago;
