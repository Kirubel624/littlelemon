import React, { useEffect, useReducer, useState } from 'react';
import BookingForm from './BookingForm';
import {message} from 'antd'
import { useNavigate } from 'react-router-dom';
export const updateTimesReducer = (state, action) => {
  switch (action?.type) {
    case "UPDATE_TIMES":
      return action?.payload?.updateTimes;
    default:
      return state;
  }
};
export const initializeTimes = (times) => {
  return times;
};

const BookingPage = () => {
  const navigate=useNavigate()
  const dateNow=new Date().toISOString().split('T')[0]
  const [times, setTimes] = useState([]);

  const [date, setDate] = useState(dateNow);
  const [availableTimes, dispatch] = useReducer(updateTimesReducer,[],initializeTimes);
  const handleReservation = (e,bookingInfo) => {
    e.preventDefault();
    console.log(bookingInfo,"inside handleReservation booking info")
  
    fetch('http://localhost:8000/api/v1/reserve',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingInfo)
    }).then((res)=>{
      console.log(res,"res in handle reservation")
      if(res.status===409&&availableTimes.length!==0){
        message.info('Time has been booked for this date!')

      }else if(res.status===201){
        // message.success("Reservation successful!")
         navigate(`/bookingConfirmation?date=${bookingInfo.reservationDate}&occassion=${bookingInfo.occassion}&time=${bookingInfo.reservationTime}`)

        
      }else if(availableTimes.length===0){
        message.info('All times for this date have been booked!. Try another date')

      }
      res.json()
       updateAvailableTimes(date)
    })
    // setDate("");
    // setTime("");
    // setNumberOfGuests("");
    // setOccasion("");

  };


  const fetchData = async (date) => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/reserve/getAvailableDates?date=${date}`);
      const data = await response.json();
      console.log(data.data.availableTimes);
        setTimes(data.data.availableTimes);
      
    } catch (err) {
      console.log(err);
    }
  };

  const updateAvailableTimes = (date) => {
    setDate(date);
    fetchData(date);
  };

  useEffect(() => {
    fetchData(date);
  }, [date]);

  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", payload: { updateTimes: times } });
initializeTimes(times)
  }, [times]);
console.log(initializeTimes(times),"function initialize times")
  return (
    <>
      <BookingForm handleReservation={handleReservation} availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes} date={date} setDate={setDate} />
    </>
  );
};

export default BookingPage;
