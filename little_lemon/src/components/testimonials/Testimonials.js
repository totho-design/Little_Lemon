import React from 'react'
import './Testimonials.css'

import {AiFillStar} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import Claire from '../../assets/Claire.jpg'
import Andrew from '../../assets/Andrew.jpg'
import Allison from '../../assets/Allison.jpg'

const Testimonials = () => {
  return (
    <div className='wrapper'>
        <div className='testimonials'>
            <div className='title'>
                <h1>Testimonials</h1>
            </div>
            <div className='cards'>
                <div className='review'>
                    <div className='span-rate'>
                        <h3>Rating:</h3>
                        <div><AiFillStar className='star' /><AiFillStar className='star' /><AiFillStar className='star' /><AiFillStar className='star'/><AiFillStar className='star' /></div>
                    </div>
                    <img src={Claire} className='prof' alt=''></img>
                    <h3>Claire Standish</h3>
                    <p>Very delicious food</p>
                </div>
                <div className='review'>
                    <div className='span-rate'>
                        <h3>Rating:</h3>
                        <div><AiFillStar className='star' /><AiFillStar className='star' /><AiFillStar className='star' /><AiFillStar className='star' /><AiFillStar className='star' /></div>
                    </div>
                    <img src={Andrew} className='prof' alt=''></img>
                    <h3>Andrew Clark</h3>
                    <p>It was great</p>
                </div>
                <div className='review'>
                    <div className='span-rate'>
                        <h3>Rating:</h3>
                        <div><AiFillStar className='star' /><AiFillStar className='star' /><AiFillStar className='star' /><AiFillStar className='star' /><AiFillStar className='star' /></div>
                    </div>
                    <img src={Allison}  className='prof' alt=''></img>
                    <h3>Allison Reynolds</h3>
                    <p>The Bruschetta was amazing</p>
                </div>
                <div className='review'>
                    <div className='span-rate'>
                        <h3>Rating:</h3>
                        <div><AiFillStar className='star' /><AiFillStar className='star' /><AiFillStar className='star' /><AiFillStar className='star' /><AiFillStar className='star'/></div>
                    </div>
                    <CgProfile className='unknown' />
                    <h3>John Bender</h3>
                    <p>Great Reastaurant</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials