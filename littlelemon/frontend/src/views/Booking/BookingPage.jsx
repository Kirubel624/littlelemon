import React, { useEffect, useReducer, useState } from 'react';
import BookingForm from './BookingForm';
import {Tabs, message} from 'antd'
import { useNavigate } from 'react-router-dom';
import Bookings from './Bookings';
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
  const [activeKey, setActiveKey] = useState("reserve");

  const [date, setDate] = useState(dateNow);
  const [availableTimes, dispatch] = useReducer(updateTimesReducer,[],initializeTimes);
  const[timeData, setTimeData] = useState()
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
          setTimeData(data.data);
        console.log(data.data,"data data data&&&&&&&&&&&&&&");
    
    } catch (err) {
      console.log(err);
    }
  };

  const updateAvailableTimes = (date) => {
    setDate(date);
    fetchData(date);
  };
console.log(timeData,"&&&&&&&&&&&&tiem data")
  useEffect(() => {
    fetchData(date);
  }, [date]);

  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", payload: { updateTimes: times } });
initializeTimes(times)
setTimeData(timeData)
  }, [times]);
console.log(initializeTimes(times),"function initialize times")
  const handleTabChange = (key) => {
    setActiveKey(key);
  };
 const booking = [
   {
     key: "reservations",
     label: "Reservations",

     children: (
       <Bookings
         date={date}
         setDate={setDate}
         availableTimesT={availableTimes}
         updateAvailableTimes={updateAvailableTimes}
       />
     ),
   },
   {
     key: "reserve",
     label: "Reserve",
     children: (
       <BookingForm
         handleReservation={handleReservation}
         availableTimesT={availableTimes}
         timeData={timeData}
         updateAvailableTimes={updateAvailableTimes}
         date={date}
         setDate={setDate}
       />
     ),
   },
 ];
return (
  <>
    <Tabs
      className="w-full mt-24 pl-10"
      items={booking}
      activeKey={activeKey}
      onChange={handleTabChange}></Tabs>
  </>
);
};

export default BookingPage;
