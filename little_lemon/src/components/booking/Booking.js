import React from 'react'
import './Booking.css'


const Booking = () => {
  return (
    <div className='booking'>
        <div className='guide'>
            <div>
                <h1>Reserve a table</h1>
                <p className='booking-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <form className='booking-form'>
                    <div>
                        <input type='text' placeholder='Enter Keyword..'/>
                    </div>
                    <div className='radio'>
                        <input type='radio' checked />
                        <label>Buy</label>
                        <input type='radio' />
                        <label>Rent</label>
                        <button type='submit'></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Booking