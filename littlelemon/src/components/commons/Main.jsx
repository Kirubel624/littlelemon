import React from 'react'
import '../../styles/main.css'
import Button from '../common/Button'
import Card from '../common/Card'
import TestimonyCard from '../common/TestimonyCard'
import Footer from './Footer'

const Main = () => {
  return (
    <>
      <main>
    <section className='bg-[#495E57] flex justify-between -red-900 items-center px-[20vw] py-10'>
     <div className='w-[25vw]  -green-900 flex flex-col justify-center item'>
        <h1 className=' font-markazi text-[3.25rem] leading-[0.8] text-[#F4CE14]'>Little Lemon</h1>
        <p className='text-white font-markazi text-3xl pb-4'>Chicago</p>
        <p className='text-white font-karla pb-8'>We are a family owned Mediterranean restaurant,focused on traditional recipes with a  modern twist</p>
        <Button buttonText="Reserve a table"/></div>
        <div className='static  -red-900 flex justify-center items-'>
          <img className=' w-[300px] rounded-xl object-cover h-[335px] absolute right-[20vw] top-[10rem]' src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1701453328/pbygrd9a1r6puekc3x2y.jpg"/>
        </div>
    </section>
    <section className=' justify-center items-center py-24 px-[20vw]'>
      <div className='flex justify-between items-center mb-4'><h1 className=' font-markazi text-5xl'>This weeks specials!</h1><Button buttonText="Order online"/></div>
      <div className='flex justify-between items-center'>
      <Card img="https://res.cloudinary.com/dvqawl4nw/image/upload/v1701456411/egxxnqvfc50gfksic7dk.png" foodName="Greek salad" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>

        <Card img="https://res.cloudinary.com/dvqawl4nw/image/upload/v1701454943/jbcggkchmsfgnomtobkp.jpg" foodName="Greek salad" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        <Card img="https://res.cloudinary.com/dvqawl4nw/image/upload/v1701454934/p3gvo4pew7extg8johdn.jpg" foodName="Greek salad" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      </div>
    </section>
    <section className='bg-[#495E57] py-24 px-[20vw]'>
      <h1 className=' font-markazi text-5xl text-center text-white'>Testimonials</h1>
      <div className=' flex justify-between items-center pt-12'>
        <TestimonyCard stars={5} review="Great food and hospitality" name="John Doe" image="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700576200/lupkrg0d6s9zksiqg9fg.avif"/>
        <TestimonyCard stars={4} review="Great food and hospitality" name="John Doe" image="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700576198/z8kjqwsl82lthhhdljc2.avif"/>
        <TestimonyCard stars={4.3} review="Great food and hospitality" name="John Doe" image="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700576196/f2uibet1zsaah1eezqit.avif"/>
        <TestimonyCard stars={4.7} review="Great food and hospitality" name="John Doe" image="https://res.cloudinary.com/dvqawl4nw/image/upload/v1701541341/vlad1gswy3vlxentw9al.jpg"/>
      </div>

    </section>
    <section className='py-24 px-[20vw] flex'>
      <div className=''><h1 className=' font-markazi text-[3.25rem] leading-[0.8]'>Little Lemon</h1>
    <p className='font-markazi text-3xl pb-4'>Chicago</p>
<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p></div>
    <div className='w-[90vw]'>
      <img className='absolute right-20 w-[300px] h-[335px] object-cover z-20 ' src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1701453328/pbygrd9a1r6puekc3x2y.jpg"/>
      <img className='relative top-28  w-[300px] h-[335px] object-cover' src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1701456411/egxxnqvfc50gfksic7dk.png"/>
    </div>
    </section>
</main>
    </>
  )
}

export default Main
