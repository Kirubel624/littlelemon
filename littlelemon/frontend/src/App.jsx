import { useState } from 'react'
import './App.css'
import Homepage from './views/Home'
import Booking from './views/Booking'
import { Route, Routes } from 'react-router-dom'
import Header from './components/commons/Header'
import Footer from './components/commons/Footer'
import PrivateRoutes from './utils/ProtectedRoutes'
import ConfirmedBooking from './views/Booking/ConfirmedBooking'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col min-h-screen'>
    <Header/>
<div className='flex-grow'>
    <Routes>
      <Route element={<PrivateRoutes/>}>
        <Route element="" path="/orderonline"/>
      </Route>
      <Route element={ <Homepage/>} path="/"/>
      <Route element={ <Booking/>} path="/booking"/>
      <Route element={ <ConfirmedBooking/>} path="/bookingConfirmation"/>
    </Routes></div>
<Footer/>
     
    </div>
  )
}

export default App
