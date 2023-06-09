import React from 'react'
import './Booking.css'
import Bookingform from './Bookingform'


const Booking = () => {
  return (
    <div className='booking' id='booking'>
        <div className='guide'>
            <div className='booking-description'>
                <h1>Reserve a table</h1>
                <p className='booking-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div><Bookingform /></div>
        </div>
    </div>
  )
}

export default Booking