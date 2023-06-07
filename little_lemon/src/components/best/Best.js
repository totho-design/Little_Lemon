import React from 'react'

import Salad from '../../assets/salad.png'
import Bruschetta from '../../assets/bruschetta.png'
import Dessert from '../../assets/dessert.png'

import './Best.css'

const Best = () => {
  return (
    <div className='best'>
        <h1>Find best rated properties</h1>
        <div>
            <p><span className='bold'>All</span></p>
            <p>Commercial</p>
            <p>Residential</p>
            <p>Agricultural</p>
        </div>
        <div className='container'>
            <img src={Salad} alt='' />
            <img src={Bruschetta} alt='' />
            <img src={Dessert} alt='' />
        </div>
        <button className='btn'>View All</button>
    </div>
  )
}

export default Best