import React, { useEffect, useMemo, useState } from 'react';
import {LeftCircleFilled} from '@ant-design/icons'
import { message } from 'antd';
import Button from '../../components/common/Button'


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
    <div className="flex flex-col mt-24">
      <span className="flex justify-center items-center   -red-900">
        <LeftCircleFilled className="block md:hidden absolute left-10 text-xl text-[#495E57]" />
        <h1 className="font-karla text-center font-extrabold text-xl">
          RESERVE A TABLE
        </h1>
      </span>
      <form
        data-testid="booking-form"
        className="flex flex-col boder p-10 boder-red-900 justify-center items-center"
        onSubmit={(e) => handleReservation(e, bookingInfo)}>
        <div className="flex md:flex-row flex-col w-1/2 justify-center">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="res-date" className="flex pb-[1.2rem]">
              <p className="text-red-500 pr-2">*</p>Choose date
            </label>
            <input
              type="date"
              id="res-date"
              data-testid="res-date"
              required
              className="py-1 px-3 md:mr-8 md:mb-0 mb-6
          border transition duration-300 ease-in-out border-gray-300 
          rounded-md focus:outline-none focus:ring-2
           focus:ring-blue-200 focus:border-blue-500"
              name="res-date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                updateAvailableTimes(e.target.value);
              }}
              min={new Date().toISOString().split("T")[0]}
              aria-label="Choose date for reservation"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="res-time" className="flex pb-[1.2rem]">
              <p className="text-red-500 pr-2">*</p>
              Choose time
            </label>
            {availableTimes?.length > 0 ? (
              <select
                role="select"
                name="res-time"
                required
                data-testid="res-time"
                className="py-[0.35rem] px-3 md:mb-0 mb-2
       border transition duration-300 ease-in-out border-gray-300 
       rounded-md focus:outline-none focus:ring-2
        focus:ring-blue-200 focus:border-blue-500"
                id="res-time"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                aria-label="Choose time for reservation">
                {availableTimes?.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            ) : (
              <p className="text-sm">
                No more booking times available on this date. Pick another date
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap pt-4 pb-6 boder boder-blue-900 w-1/2 justify-center">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="guests" className="flex pb-[1.2rem]">
              <p className="text-red-500 pr-2">*</p>
              Number of guests
            </label>
            <input
              type="number"
              placeholder="1"
              min="1"
              role="input"
              max="10"
              id="guests"
              className="py-1 px-3 md:mr-8 md:mb-0 mb-6
          border transition duration-300 ease-in-out border-gray-300 
          rounded-md focus:outline-none focus:ring-2
           focus:ring-blue-200 focus:border-blue-500"
              required
              value={numberOfGuests}
              onChange={(e) => {
                setNumberOfGuests(e.target.value);
              }}
              aria-label="Enter the number of guests"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="occasion" className="flex pb-[1.2rem]">
              <p className="text-red-500 pr-2">*</p>
              Occasion
            </label>
            <select
              className="py-[0.35rem] px-3 
        border transition duration-300 ease-in-out border-gray-300 
        rounded-md focus:outline-none focus:ring-2
         focus:ring-blue-200 focus:border-blue-500"
              role="select"
              required
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              aria-label="Choose occasion for reservation">
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Engagement">Engagement</option>
              <option value="Graduation">Graduation</option>
            </select>
          </div>
        </div>
        <Button
          buttonText=" Make Your reservation"
          disabled={validateGuestInput}
          type="submit"
          aria-label="On Click"
        />
        {/* <button disabled={validateGuestInput} type="submit" aria-label="On Click">
        Make Your reservation
        </button> */}
      </form>
    </div>
  );
};

export default BookingForm;
