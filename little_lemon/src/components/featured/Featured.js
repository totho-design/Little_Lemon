import React from 'react'

import './Featured.css'

import House1 from '../../assets/house1.jpeg'
import Bed1 from '../../assets/bed1.jpeg'
import Bed2 from '../../assets/bed2.jpeg'
import Kitchen from '../../assets/kitchen.jpeg'
import Bathroom from '../../assets/bath1.jpeg'

const Featured = () => {
  return (
    <div className='featured'>
        <h1 className='featured-text'>Top Featured Listings</h1>
        <p className='featured-text'>Selected listings by City, State or zip</p>
        <div className='container'>
            <img className='span-3 image-grid-row-2' src={House1} alt='' />
            <img src={Bed1} alt='' />
            <img src={Bed2} alt='' />
            <img src={Kitchen} alt='' />
            <img src={Bathroom} alt='' />
            <div className='span-3 img-details'>
                <div className='top'>
                    <h2>123 Acme St. Dallas, TX</h2>
                    <p>House for sale</p>
                    <p className='price'>$2,677,000</p>
                </div>
                <div className='info-grid'>
                    <div>
                        <div className='info'>
                            <p className='bold'>Bedrooms</p><p>5</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Bathrooms</p><p>7</p>
                        </div>
                    </div>
                    <div>
                        <div className='info'>
                            <p className='bold'>Square Feet:</p><p>8,138</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Est Payment:</p><p>$14,797/mo</p>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>A beautiful modern day home in the city with a full-size pool...</p>
                    <button className='btn'>View Listing</button>
                </div>
            </div>
        </div>
        {/*Second section*/}
        <div className='container'>
            <img className='order-2' src={Bed1} alt='' />
            <img className='order-3' src={Bed2} alt='' />

            <img  className='span-3 image-grid-row-2 order-1' src={House1} alt='' />


            <img className='order-4' src={Kitchen} alt='' />
            <img className='order-5'src={Bathroom} alt='' />
            <div className='span-2 right-img-details order-7'>
                <p>A beautiful modern day home in the city with a full-size pool...</p>
                <button className='btn'>View Listing</button>
            </div>
            <div className='span-3 img-details order-6'>
                <div className='top'>
                    <h2>123 Acme St. Dallas, TX</h2>
                    <p>House for sale</p>
                    <p className='price'>$2,677,000</p>
                </div>
                <div className='info-grid'>
                    <div>
                        <div className='info'>
                            <p className='bold'>Bedrooms</p><p>5</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Bathrooms</p><p>7</p>
                        </div>
                    </div>
                    <div>
                        <div className='info'>
                            <p className='bold'>Square Feet:</p><p>8,138</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Est Payment:</p><p>$14,797/mo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured