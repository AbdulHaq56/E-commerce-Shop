import React from 'react'
import {FiShoppingBag} from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-white'>
        <div className='container w-full h-full items-center flex justify-between'>
            <h1 className='font-urbanist font-black text-2xl'>AirPod Haven.</h1>
            <div className='cart-icon'>
            <FiShoppingBag className='cursor-pointer'/>
            <span className='card-item-qty cursor-pointer'>99</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar