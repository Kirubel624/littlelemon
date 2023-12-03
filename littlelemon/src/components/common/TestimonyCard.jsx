import React from 'react'

const TestimonyCard = ({stars, name, review, image}) => {
  return (
    <article className='flex flex-col bg-white mr-4'>
      <p className='pt-8 pl-8 pb-4'>Rating: {stars}</p>
      <p className='flex items-center pl-8'><img className=' w-14 rounded-full h-14 object-cover mr-4' src={image} alt='Profile image'/>{name}</p>
      <p className='pt-4 pb-8 pl-8'>{review}</p>
    </article>
  )
}

export default TestimonyCard