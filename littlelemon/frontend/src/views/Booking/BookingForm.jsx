import React, { useEffect, useMemo, useState } from 'react';
import {LeftCircleFilled} from '@ant-design/icons'
import { message } from 'antd';



export const validateGuestInput=(guest)=>{
  if(guest===0) return false
  return true
}

const BookingForm = ({ handleReservation, availableTimes, updateAvailableTimes, date, setDate }) => {
  const [time, setTime] = useState("17:00");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("Anniversary");
  const [bookingInfo, setBookingInfo] = useState({
    userID:"6cftgs6uegtfsty",
    reservationDate: date,
    reservationTime: "17:00",
    numberOfGuests: "1",
    occassion: "Anniversary",
  });

 
useEffect(()=>{
setTime(availableTimes[0])
console.log(availableTimes.length)
},[availableTimes])
  // console.log("Booking information", bookingInfo);
  const memoizedBookingInfo = useMemo(() => ({
    userID: "awhjfhjawfawdawd",
    reservationDate: date,
    reservationTime: time,
    numberOfGuests: numberOfGuests,
    occassion: occasion
  }), [date, time, numberOfGuests, occasion]);
  
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (date < today) {
      setDate(today);
    }
    setBookingInfo(memoizedBookingInfo);
    console.log(memoizedBookingInfo);
  }, [date, setDate, memoizedBookingInfo]);
validateGuestInput(numberOfGuests)
  return (
    <div className='flex flex-col mt-24'>
    <span className='flex justify-center items-center   -red-900'>
  <LeftCircleFilled className='block md:hidden absolute left-10 text-xl text-[#495E57]'/>
   <h1 className='font-karla text-center font-extrabold text-xl'>RESERVE A TABLE</h1></span>
      <form data-testid="booking-form" className='flex flex-col justify-center items-center'
       onSubmit={(e)=>handleReservation(e,bookingInfo)}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          data-testid="res-date"
          required
          name="res-date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            updateAvailableTimes(e.target.value);
          }}
          min={new Date().toISOString().split('T')[0]}
          aria-label="Choose date for reservation"
        />
        <label htmlFor="res-time">Choose time</label>
       {availableTimes?.length>0? <select 
       role='select'
          name="res-time"
       required
       id="res-time" value={time} onChange={(e) => { setTime(e.target.value) }} aria-label="Choose time for reservation">
          {availableTimes?.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>:<p>No more booking times available on this date. Pick another date</p>}
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          role='input'
          max="10"
          id="guests"
          required
          value={numberOfGuests}
          onChange={(e) => { setNumberOfGuests(e.target.value) }}
          aria-label="Enter the number of guests"
        />
        <label htmlFor="occasion">Occasion</label>
        <select role='select' required id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} aria-label="Choose occasion for reservation">
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="Graduation">Graduation</option>
        </select>
        <button disabled={validateGuestInput} type="submit" aria-label="On Click">
        Make Your reservation
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
