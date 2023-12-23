import {fireEvent, getByLabelText, getByText, render, screen} from '@testing-library/react'

import BookingForm from './BookingForm'
import { updateTimesReducer, initializeTimes } from './BookingPage';  // Import the function from your BookingPage
import HomePage from '../Home/index'
import { describe, expect, it, vi, afterEach, beforeEach } from 'vitest'
import TestRenderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import * as utils from './BookingPage'

describe("Booking Form",()=>{
    test("Static text test",()=>{
    // const initializeTimes = jest.fn()
    render(<BookingForm availableTimes={["17:00","18:00","19:00","20:00","21:00"]}/>)

    const textElement=screen.getByText(/Make Your reservation/i)
console.log(textElement)
    expect(textElement).toBeInTheDocument()
    // expect(initializeTimes).toEqual(["17:00","18:00","19:00","20:00","21:00"])
}
)

it("Will create a snapshot", ()=>{
    const homePage=TestRenderer.create(<MemoryRouter><HomePage/></MemoryRouter>).toJSON()
    expect(homePage).toMatchSnapshot()
})
it("Returns available times",()=>{
  const times=["17:00","18:00","19:00","20:00","21:00"]
  const result = utils.initializeTimes(times)
  const expectedTimes=["17:00","18:00","19:00","20:00","21:00"]
  expect(result).toEqual(expectedTimes)
})
it('Returns the same value that is provided in the state', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    const action = { type: 'UPDATE_TIMES', payload: {  updateTimes: ['17:00', '18:00', '19:00', '20:00', '21:00'] } };

    // Dispatch the action and get the updated state
    const updatedState = updateTimesReducer(initialState, action);

    // Assert that the updated state is the same as the initial state
    expect(updatedState).toStrictEqual(initialState);
  });
it("User can make reservations",()=>{
    const handleReservation=jest.fn()
    const { getByLabelText, getByText } = render(<BookingForm availableTimes={["17:00","18:00","19:00","20:00","21:00"]} handleReservation={handleReservation}/>);
  
    const dateInput = getByLabelText('Choose date');
    const timeSelect = getByLabelText('Choose time');
    const submitButton = getByText('Make Your reservation');
    fireEvent.change(dateInput, { target: { value: '2023-12-08' } });
    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    fireEvent.click(submitButton);
    expect(handleReservation).toHaveBeenCalled()
})
})