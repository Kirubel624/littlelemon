import { Form } from 'antd'
import React from 'react'
import Input from '../../components/common/Input'

const Booking = () => {
  return (
    <div>
      <Form>
        <Form.Item>
          <Input text="" type="text" placeholder=""/>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Booking
