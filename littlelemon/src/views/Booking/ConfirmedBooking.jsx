import { Result } from 'antd'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';

const ConfirmedBooking = () => {
    const location = useLocation();
    const navigate=useNavigate()
  const queryParams = new URLSearchParams(location.search);
   // Access individual query parameters
   const occasion = queryParams.get('occassion');
   const date = queryParams.get('date');
   const time = queryParams.get('time');
   //console.log(date)
  return (
    <div className='pt-24'>
      <Result
      title="Reservation successful!"
      subTitle={`Your reservation for ${occasion} on ${date} 
      at ${time} is confirmed. We look forward to welcoming you and making your experience memorable.`}
      status="success"
      extra={
        <Button buttonText='Go back to home page' onClick={()=>navigate('/')}/>
      }
      />
    </div>
  )
}

export default ConfirmedBooking
