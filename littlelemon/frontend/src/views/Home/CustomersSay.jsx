import React from 'react';
import TestimonyCard from '../../components/common/TestimonyCard';

const CustomersSay = () => {
  return (
    <section className='bg-[#495E57] py-24 px-[20vw]'>
      <h1 className='font-markazi text-5xl text-center text-white' aria-label="Testimonials">Testimonials</h1>
      <div className='grid md:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-4 justify-around items-center pt-12'>
        <TestimonyCard
          stars={5}
          review="Great food and hospitality"
          name="Amy"
          image="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700576200/lupkrg0d6s9zksiqg9fg.avif"
        />
        <TestimonyCard
          stars={4}
          review="Great food and hospitality"
          name="Maria"
          image="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700576198/z8kjqwsl82lthhhdljc2.avif"
        />
        <TestimonyCard
          stars={4.3}
          review="Great food and hospitality"
          name="Silvia"
          image="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700576196/f2uibet1zsaah1eezqit.avif"      
        />
        <TestimonyCard
          stars={4.7}
          review="Great food and hospitality"
          name="John"
          image="https://res.cloudinary.com/dvqawl4nw/image/upload/v1701541341/vlad1gswy3vlxentw9al.jpg"
        />
      </div>
    </section>
  );
};

export default CustomersSay;
