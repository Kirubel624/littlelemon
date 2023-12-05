import { useState } from 'react'
import './App.css'
import Homepage from './views/Home'
import Booking from './views/Booking'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route element={ <Homepage/>} path="/"/>
      <Route element={ <Booking/>} path="/booking"/>
    </Routes>
     
    </>
  )
}

export default App
