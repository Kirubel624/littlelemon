import React from 'react'
import CallToAction from './CallToAction '
import Specials from './Specials'
import CustomersSay from './CustomersSay'
import Chicago from './Chicago'

const Main = () => {
  return (
    <>
      <main className='pt-20'>
    <CallToAction/>
    <Specials/>
   <CustomersSay/>
   <Chicago/>
</main>
    </>
  )
}

export default Main
