import { useEffect, useState } from 'react'
import './App.css'
import Homepage from './views/Home'
import Booking from './views/Booking'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/commons/Header'
import Footer from './components/commons/Footer'
import PrivateRoutes from './utils/ProtectedRoutes'
import ConfirmedBooking from './views/Booking/ConfirmedBooking'
import { Modal, Result } from 'antd'
import AboutPage from './views/About'
import AuthenticationPage from './views/Auth/Authentication'
import ProtectedRoutes from './utils/ProtectedRoutes'

function App() {
  const [count, setCount] = useState(0)
  const [isAuthOpen, setIsAuthOpen] = useState(true)
  const handleCancel=()=>{
    setIsAuthOpen(false)
  }
  const location=useLocation()
  console.log(location,"%%%%%locaiton")
  useEffect(()=>{
    if(location.pathname==='/login'){
      setIsAuthOpen(true)
    }
  },[location])
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element="" path="/orderonline" />
          </Route>
          <Route element={<Homepage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={
         
          <AuthenticationPage />
        
          } path="/login" />
          <Route element={<ProtectedRoutes/>}>
       <Route element={<Booking />} path="/booking" />
          <Route element={<ConfirmedBooking />} path="/bookingConfirmation" /></Route>
          <Route
            element={
              <div className="pt-24">
                <Result
                  status="404"
                  title="404"
                  subTitle="Sorry, the page you visited does not exist."
                  extra={<Link to="/">Back Home</Link>}
                />
              </div>
            }
            path="/order"
          />
          <Route
            element={
              <div className="pt-24">
                <Result
                  status="404"
                  title="404"
                  subTitle="Sorry, the page you visited does not exist."
                  extra={<Link to="/">Back Home</Link>}
                />
              </div>
            }
            path="/menu"
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App
