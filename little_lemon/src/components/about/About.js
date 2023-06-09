import React from 'react'
import './About.css'
import Chefs from '../../assets/Mario-and-Adrian-B.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='history'>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div><img src={Chefs} className='chefs' alt='The chefs' /></div>
        </div>
    </div>
  )
}

export default About