"use client";

import React, { useContext } from "react";
import { AiOutlineLeft, AiOutlinePlus } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { AiOutlineMinus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

const Cart = () => {
  const { toggleCartItemQty, totalPrice, totalQuantity, cartItems, showCart, setShowCart, onRemove }: any =
    useContext(CartContext);
  const handleClose = () => {
    setShowCart(!showCart);
  };

  const handleCheckout = async () => {
    try {
        const response = await fetch('/api/checkout',{
          method:'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({products:cartItems}),
        });
        const data = await response.json();
        if(data.url){
          window.location.href = data.url
        }
    } catch (error) {
      console.error("Error during checkout", error)
    }




  }


  return showCart ? (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button className="cart-heading" onClick={handleClose}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">{totalQuantity}</span>
        </button>
        <div className="product-container">
          {cartItems.map((product: any) => (
            <div className="product" key={product._id}>
              <Image
                loader={() => urlFor(product.images[0]).url()}
                src={urlFor(product.images[0]).url()}
                alt={product.images[0]}
                width={200}
                height={200}
                className="object-cover mx-auto"
              />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{product.name}</h5>
                  <h4>{product.price}</h4>
                </div>
                <div className="flex bottom">
                  <div className="quantity-desc">
                    <span className="minus" onClick={()=> toggleCartItemQty(product._id, 'minus')}>
                      <AiOutlineMinus />
                    </span>

                    <span className="num">{product.quantity}</span>

                    <span className="plus" onClick={()=> toggleCartItemQty(product._id, 'plus')}>

                      <AiOutlinePlus />
                    </span>
                  </div>
                  <button type="button" className="remove-item"
                  onClick={()=>onRemove(product)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length>0 && 
            <div className="cart-bottom">
            <div className="total">
              <h3>Sub Total</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="checkout-btn" onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  ) : null;
};

export default Cart;
