import React from 'react'
import {FiShoppingBag} from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-white'>
        <div className='container w-full h-full items-center flex justify-between'>
            <h1 className='font-urbanist font-black text-2xl'>AirPod Haven.</h1>
            <div className='cart-icon'>
            <FiShoppingBag />
            <span className='card-item-qty'>99</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar