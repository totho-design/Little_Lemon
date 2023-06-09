import React from 'react'

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero' id="hero">
        <div className='content'>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className='hero-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className='btn'>Reserve a table</button>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Hero