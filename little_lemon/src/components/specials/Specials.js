import React from 'react'

import Salad from '../../assets/salad.png'
import Bruschetta from '../../assets/bruschetta.png'
import Dessert from '../../assets/dessert.png'

import './Specials.css'

const Specials = () => {
  return (
    <div className='specials' id='specials'>
      <div className='headline'>
        <h1>This Week Specials!</h1>
        <button className='btn ordr'>Order Online</button>
      </div>
        <div className='description'>
          <div className='card'>
            <div>
              <img src={Salad} className='dish' alt='Greek Salad' />
              <div className='span'>
                <h3>Greek Salad</h3>
                <span className='price'>$ 12.99</span>
              </div>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <button className='dlvr'>Order Delivery</button>
          </div>
          <div className='card'>
            <div>
              <img src={Bruschetta} className='dish' alt='Bruschetta' />
              <div className='span'>
                <h3>Bruschetta</h3>
                <span className='price'>$ 5.99</span>
              </div>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <button className='dlvr'>Order Delivery</button>
          </div>
          <div className='card'>
            <div>
              <img src={Dessert} className='dish' alt='Lemon Dessert' />
              <div className='span'>
                <h3>Lemon Dessert</h3>
                <span className='price'>$ 5.00</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='dlvr'>Order Delivery</button>
          </div>
        </div>
    </div>
  )
}

export default Specials