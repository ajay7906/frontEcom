import React from 'react'
import './Offers.css'
import exclusive_img from '../Pics/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
<h1>Exclusive </h1>
<h1>Offers For You</h1>
<p>ONLY ON BESTSELLERS PRODUCTS</p>
<button>Check Now</button>
      </div>
      <div className="offers-right">
<img src={exclusive_img} alt=""/>
      </div>
    </div>
  )
}

export default Offers
