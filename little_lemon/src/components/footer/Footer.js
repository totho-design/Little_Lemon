import React from 'react'

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'
import Logo from '../Logo'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='col'>
                <Logo  className='logo' />
            </div>
            <div className='col'>
                <h3>Navigation</h3>
                <p>Home</p>
                <p>About</p>
                <p>Menu</p>
                <p>Reservations</p>
                <p>Order Online</p>
                <p>Login</p>
            </div>
            <div className='col'>
                <h3>Contact</h3>
                <p>Address</p>
                <p>Phone number</p>
                <p>Email</p>
            </div>
            <div className='col'>
                <div className='social'>
                    <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaTwitter className='icon' />
                    <FaPinterest className='icon' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer