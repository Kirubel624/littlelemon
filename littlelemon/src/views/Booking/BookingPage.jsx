import React, { useReducer, useState } from 'react'
import BookingForm from './BookingForm'
export const updateTimesReducer=(state,action)=>{
  console.log(action.payload.date,"Inside reducer function");
  switch(action.type){

    case  "UPDATE_TIMES":
return state
default:
  return state;
  
  }
}
const BookingPage = () => {

const initializeTimes=()=>{
  return ["17:00","18:00","19:00","20:00","21:00"]
}

const[availableTimes,dispatch]=useReducer(updateTimesReducer,[],initializeTimes)
const updateAvailableTimes=(date)=>{
  dispatch({type:"UPDATE_TIMES",payload:{date}})
}
console.log(availableTimes)
  return (
    <>
     <BookingForm availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes}/> 
    </>
  )
}

export default BookingPage
