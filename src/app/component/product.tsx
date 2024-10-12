/* eslint-disable react/jsx-key */
import React from 'react'
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Card from './Card';


const Products = async () => {

    const products = await client.fetch(groq `*[_type=="product"]`)

  return (
    <div className='bg-[#f8f8f8] w-full py-12 mt-[125px]'>
        <div className='container'>
            <div className='py-8'>
                <h2 className='text-3xl font-bold'>Best Selling Products</h2>
                <h2>Enjoy Up To 50%</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-4 gap-x-3 mt-6'>
                {products.map((product:any,index:number)=>(
                    <Card key={index} product={product}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products