import React from 'react'
import Logo from './Logo'
import HamburgerIcon from './HamburgerIcon'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <h1><span><Logo />Little</span>Lemon</h1>
            <button className='btn'>Sign In</button>
            <ul className='nav-menu'>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Search</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
            <div className='hamburger'>
                <HamburgerIcon />

            </div>
        </div>

    </div>
  )
}

export default Navbar