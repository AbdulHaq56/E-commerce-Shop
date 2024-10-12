"use client";
import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const ProductDetails = ({ product }: any) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="product-details-section">
      <div className="product-details-container">
        {/* left */}
        <div>
          {/* top */}
          <div className="h-[450px] flex items-center mb-[25px]">
            <Image
              loader={() => urlFor(product.images[index]).url()}
              src={urlFor(product.images[index]).url()}
              alt={product.images[index]}
              width={350}
              height={350}
              className="object-cover mx-auto"
            />
          </div>

          {/* bottom */}
          <div className="small-images-container">
            {product.images?.map((item: any, i: number) => (
              <Image
                key={i}
                loader={() => urlFor(product.images[i]).url()}
                src={urlFor(product.images[i]).url()}
                alt={product.images[0]}
                width={220}
                height={100}
                className="object-cover h-32 border rounded-xl hover:cursor-pointer mx-auto"
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col gap-8 md:pt-32 p-0">
          <div className="flex flex-col gap-4-">
            <div className="text-3xl font-bold">{product.name}</div>
            <div className="text-xl font-medium">{`$${product.price}`}</div>
          </div>

            <div className="flex gap-2 items-center">
              <h3>Quantity</h3>
              <p className="quantity-desc flex items-center border-black">
                <span className="minus">
                  <AiOutlineMinus />
                </span>
                <span className="num">
                  1
                </span>
                <span className="plus">
                  <AiOutlinePlus/>
                </span>
              </p>
            </div>

            <button className="btn add-to-cart">
              Add To Cart
            </button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
