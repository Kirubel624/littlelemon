import { List } from 'antd';
import React from 'react'

const BookingSlot = ({availableTimes, bookedTimes}) => {
  return (
    <div>
      <div className="items-start justify-center w-full md:w-full boder boder-red-900 flex my-8 md:ml-8">
        {availableTimes && (
          <List
            rowKey={(time) => time}
            className="pr-10"
            header={<div>Available Times</div>}
            dataSource={availableTimes}
            renderItem={(time) => (
              <List.Item>
                <p key={time}>{time}</p>
              </List.Item>
            )}
          />
        )}

        {bookedTimes && (
          <List
            rowKey={(time) => time}
            header={<div>Booked Times</div>}
            dataSource={bookedTimes}
            renderItem={(time) => (
              <List.Item>
                <p key={time}>{time}</p>
              </List.Item>
            )}
          />
        )}
      </div>
    </div>
  );
}

export default BookingSlot
