import React, {useState} from 'react'
import Logo from '../Logo'
import {Link} from 'react-scroll'
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
                <li><Link to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
                <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                <li><Link to="specials" spy={true} smooth={true} offset={50} duration={500}>Menu</Link></li>
                <li><Link to="booking" spy={true} smooth={true} offset={50} duration={500}>Reservation</Link></li>
                <li><Link to="specials" spy={true} smooth={true} offset={50} duration={500}>Order Online</Link></li>
                <li><Link to="/" spy={true} smooth={true} offset={50} duration={500}>Login</Link></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<CgClose className='icon' />) : (<HiMenu className='icon' />)}

            </div>
        </div>

    </div>
  )
}

export default Navbar