'use client'

import { useParams } from 'next/navigation'
import { Navbar , ProductDetails} from '../../component'
import { client } from '@/sanity/lib/client'
import React from 'react'
import { groq } from 'next-sanity'



const page = async () => {
    const { slug } = useParams();
    const products = await client.fetch(groq `*[_type=="product"]`)
    const product = products .find((product:any) => product.slug.current == slug)

    console.log(product);
    
    
  return (
    <>
    <Navbar />
    <ProductDetails product={product}/>
    </>
  )
}

export default page