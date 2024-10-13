'use client'

import React, { useContext } from 'react'
import {FiShoppingBag} from 'react-icons/fi'
import Cart from './Cart'
import { CartContext } from '../context/CartContext'
import Link from 'next/link'

const Navbar = () => {

  const { totalQuantity ,showCart, setShowCart}:any = useContext(CartContext);

  const handleClick =  () => {
    setShowCart(!showCart)
  }

  return (
    <>
    <div className='w-full h-[80px] bg-white'>
        <div className='container w-full h-full items-center flex justify-between'>
            <Link href="/">
            <h1 className='font-urbanist font-black text-2xl'>AirPod Haven.</h1>
            </Link>
            <button className='cart-icon' onClick={handleClick}>
            <FiShoppingBag className='cursor-pointer'/>
            <span className='card-item-qty'>{totalQuantity}</span>
            </button>
        </div>
    </div>
    {showCart && <Cart />}
    <Cart />
    </>
  )
}

export default Navbar