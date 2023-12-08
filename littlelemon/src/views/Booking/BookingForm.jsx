import React, { useEffect, useState } from 'react';

const BookingForm = ({ availableTimes, updateAvailableTimes }) => {
  const [date, setDate] = useState("00/00/0000");
  const [time, setTime] = useState("00:00");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("Anniversary");
  const [bookingInfo, setBookingInfo] = useState({
    date: "00/00/0000",
    time: "00:00",
    numberOfGuests: "1",
    occasion: "",
  });

  const handleReservation = (e) => {
    e.preventDefault();
    console.log(date, time, numberOfGuests, occasion);
    setBookingInfo((prevBooking) => ({ ...prevBooking, date: date, time: time, numberOfGuests: numberOfGuests, occasion: occasion }));
    // setDate("");
    // setTime("");
    // setNumberOfGuests("");
    // setOccasion("");
  };

  console.log("Booking information", bookingInfo);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (date < today) {
      setDate(today);
    }
  }, [date, setDate]);

  return (
    <>
      <form className='pt-24 flex flex-col' onSubmit={handleReservation}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            updateAvailableTimes(e.target.value);
          }}
          min={new Date().toISOString().split('T')[0]}
          aria-label="Choose date for reservation"
        />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => { setTime(e.target.value) }} aria-label="Choose time for reservation">
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={numberOfGuests}
          onChange={(e) => { setNumberOfGuests(e.target.value) }}
          aria-label="Enter the number of guests"
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} aria-label="Choose occasion for reservation">
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="Graduation">Graduation</option>
        </select>
        <input type="submit" value="Make Your reservation" aria-label="Submit reservation form" />
      </form>
    </>
  );
};

export default BookingForm;
