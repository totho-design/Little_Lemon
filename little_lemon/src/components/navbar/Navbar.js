import React, {useState} from 'react'
import Logo from '../Logo'
import {HiMenu} from 'react-icons/hi'
import{CgClose} from 'react-icons/cg'
import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='navbar'>
        <div className='container'>
            <h1><span><Logo className='logo'/></span></h1>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Menu</a></li>
                <li><a href='/'>Reservation</a></li>
                <li><a href='/'>Order Online</a></li>
                <li><a href='/'>Log In</a></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<CgClose className='icon' />) : (<HiMenu className='icon' />)}

            </div>
        </div>

    </div>
  )
}

export default Navbar