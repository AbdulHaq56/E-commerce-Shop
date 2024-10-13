"use client";

import React, { useContext } from "react";
import { AiOutlineLeft, AiOutlinePlus } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { AiOutlineMinus } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

const Cart = () => {
  const { totalQuantity ,cartItems, showCart, setShowCart }: any = useContext(CartContext);
  const handleClose = () => {
    setShowCart(!showCart);
  };

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
                        <span className="minus">
                            <AiOutlineMinus/>
                        </span>

                        <span className="num">
                            {product.quantity}
                        </span>

                        <span className="plus">
                            <AiOutlinePlus/>
                        </span>
                    </div>
                    <button type="button" className="remove-item">
                        <TiDeleteOutline/>
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default Cart;
