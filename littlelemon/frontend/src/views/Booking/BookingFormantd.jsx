import { DatePicker, Form, Input, Select, TimePicker } from 'antd'
import React, { useState } from 'react'
import {LeftCircleFilled, UserAddOutlined, UserOutlined} from '@ant-design/icons'
import Button from '../../components/common/Button'
const {Option} = Select
const BookingForm = () => {
  const [form]=Form.useForm()
  const[date,setDate]=useState()
  const[time,setTime]=useState()
  const handleBooking=(values)=>{
    console.log(values,"form values")
    const {date:datex}=values
    console.log(time,"time")
    console.log(datex.$d.toLocaleString().split(" ")[0].toLocaleString().split(",")[0])


  }
  const onChangeDate=(date, dateString)=>{
    console.log(date, dateString)
    setDate(dateString)


  }
  const onChangeTime = (time, timeString) => {
    console.log(time, timeString);
    setTime(timeString)
  };
  return (
    <div className=' mt-24 pb-2 '>
 
 <span className='flex justify-center items-center  -red-900'>
  <LeftCircleFilled className='block md:hidden absolute left-10 text-xl text-[#495E57]'/>
   <h1 className='font-karla text-center font-extrabold text-xl'>RESERVE A TABLE</h1></span>
    <div className='flex flex-wrap justify-center items-center  -green-900'>
     
      <Form
      name="booking"
      onFinish={handleBooking}
      className='px-10 lg:px-0'
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      form={form}
      >
          <div className="flex flex-wrap w-full boder-2 boder-red-700 justify-center">
          <div className="w-full lg:w-1/2">
        <Form.Item 
      name="numberofguests"
      label="Number of guests"
      className='lg:pr-16'
      rules={[
        {
        required:true,
        message:"Please enter number of guests"
      },
        {
        min:1,
        message:"Please enter a minimum of 1 guest"
      },
        {
        max:10,
        message:"Please enter maximum of 10 guests"
      },
    ]}
      >
<Input placeholder='Enter number of guests' min="1" max="10" type='number'/>
      </Form.Item></div>
      <div className="w-full lg:w-1/2">


      <Form.Item name="occassion" label="Occasion" rules={[{required:true,message:"Please enter occassion"}]}>
        <Select placeholder="Select occassion">
          <Option value="Anniversary">Anniversary</Option>
          <Option value="Birthday">Birthday</Option>
          <Option value="Graduation">Graduation</Option>
          <Option value="Engagement">Engagement</Option>
        </Select>
      </Form.Item></div>
</div>
<div className="flex flex-wrap w-full boder-2 boder-red-700 justify-center">
<div className="w-full lg:w-1/2">


<Form.Item 
name="date"
label="Date"
className='lg:pr-16'
rules={[{required:true,message:"Please select date of reservation "}]}
>
<DatePicker className='w-full ' placeholder='Pick date' onChange={onChangeDate} />
</Form.Item></div>
<div className="w-full lg:w-1/2">
        <Form.Item
        label="Time"
        name="time"
        rules={[{
          required: true,
          message:"Please enter the time of reservation"
        }]}
        >
         <Select placeholder="Select Time">
          <Option value="17:00">17:00</Option>
          <Option value="19:00">19:00</Option>
          <Option value="20:00">20:00</Option>
          <Option value="21:00">21:00</Option>
          <Option value="22:00">22:00</Option>
        </Select>
        </Form.Item></div>
        </div>
<div className="flex flex-wrap w-full boder-2 boder-red-700 justify-center">

        <div className='w-full lg:w-1/2'>
          <Form.Item
          name="creditcardnumber"
          label="Credit Card Number"
          className='lg:pr-16'
rules={[{required:true,message:"Please enter a credit card number"}]}

          >
            <Input type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" maxlength="19" placeholder="xxxx xxxx xxxx xxxx"/>
          </Form.Item>
        </div>
        <div className='flex flex-col sm:flex-row w-full lg:w-1/2  -blue-900'>
          <Form.Item
          name="expirationDate"
          label="Expiration Date"
          className='lg:mr-16 mr-16  lg:w-1/2 w-full -green-900'
rules={[{required:true,message:"Please enter expiration date"}]}

          >
            <DatePicker className='w-full' placeholder='Enter expiration date' onChange={onChangeDate}/>
          </Form.Item>
          
          <Form.Item
          name="cvv"
          label="CVV"
          className='lg:w-1/2 w-full  -purple-900'
rules={[{required:true,message:"Please enter CVV"}]}

          >
            <Input placeholder="Enter CVV"/>
          </Form.Item>
        </div>
        
        
        </div>
        <Form.Item
        className='flex items-center justify-center'
        >
          <Button buttonText="Submit" style='bg-[#F4CE14] text-black px-8 py-2 rounded-[16px] font-bold'/>
        </Form.Item>
      </Form>
    </div></div>
  )
}

export default BookingForm
