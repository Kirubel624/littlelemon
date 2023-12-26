import axios from 'axios'
import React, { useEffect, useState } from 'react'
import api from '../../utils/api'
import { Card, Empty, Table, message } from 'antd'
import Button from '../../components/common/Button'
import ReservationIcon from "../../assets/reservation.svg";
import { BounceLoader } from "react-spinners";

const Bookings = ({updateAvailableTimes, date, setDate}) => {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
const id = localStorage.getItem("userID");
const refresh=()=>{
    const cancelToken=axios.CancelToken.source()
    setLoading(true)
 api
   .get(`/reserve/${id}`, { cancelToken: cancelToken.token })
   .then((res) => {
     setBookings(res.data.data);
     setDate(date)
     updateAvailableTimes(date)
     setLoading(false)
     console.log(res);
   })
   .catch((err) => {
     if (axios.isCancel(err)) {
       //request cancellation
     } else {
       //request error
     }
   });

 return () => {
   cancelToken.cancel();
 };
 
}
  useEffect(()=>{

refresh()
 
 
  },[])
  const columns = [
    {
      title: "Number of Guests",
      dataIndex: "numberOfGuests",
      key: "numberOfGuests",
    },
    {
      title: "Occassion",
      dataIndex: "occassion",
      key: "occassion",
    },
    {
      title: "Reservation Date",
      dataIndex: "reservationDate",
      key: "reservationDate",
    },
    {
      title: "Reservation Time",
      dataIndex: "reservationTime",
      key: "reservationTime",
    },
  ];
  const handleCancel=(id)=>{
api.post("/reserve/cancelReservation",{id}).then((res)=>{
  message.success("Reservation successfully canceled")

  refresh();
}).catch((err)=>{
  message.error("Error occured while trying to cancel reservation. Try again")
});
  }

  const Content=()=>{}
  return (
    <div className="flex flex-wrap justify-items-start">
      {bookings.length > 0 && !loading ? (
        bookings.map((reservation, index) => (
          <Card key={index} className="mb-4 mr-4">
            <p>
              <strong>Number of Guests:</strong> {reservation.numberOfGuests}
            </p>
            <p>
              <strong>Occasion:</strong> {reservation.occassion}
            </p>
            <p>
              <strong>Reservation Date:</strong>{" "}
              {reservation.reservationDate.slice(0, 10)}
            </p>
            <p className="pb-4">
              <strong>Reservation Time:</strong> {reservation.reservationTime}
            </p>
            <Button
              buttonText="Cancel reservation"
              onClick={() => handleCancel(reservation._id)}
            />
          </Card>
        ))
      ) : !loading && bookings.length === 0 ? (
        <>
          <Empty
            image="https://res.cloudinary.com/dvqawl4nw/image/upload/v1703533684/qv82rxkrugxql8arhwr3.svg"
            imageStyle={{
              height: 80,
            }}
            className="flex flex-col justify-center items-center w-full py-6"
            description={
              <>
                It looks like you haven't made any reservations yet.
                <br />
                Why not plan a delightful dining experience now?
              </>
            }></Empty>
        </>
      ) : (
        <div className="boder flex flex-col boder-red-900 p-20 w-full justify-center items-center">
          <BounceLoader
            color="#F4CE14"
            loading={setLoading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          Loading...
        </div>
      )}
    </div>
  );
}

export default Bookings
