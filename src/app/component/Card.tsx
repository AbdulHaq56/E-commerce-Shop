import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const Card = ({product}:any) => {
  return (
    <Link href={`/Products/${product.slug.current}`}>
                <div className='bg-white pt-10 drop-shadow-md rounded-lg overflow-hidden'>
                    <Image
                    src={urlFor(product.images && product.images[0]).url()}
                    alt='products.slug'
                    width={220}
                    height={100}
                    className='object-cover h-55 mx-auto'
                    />
                    <div className='text-center py-10'>
                        <h2 className='text-2xl font-bold'>{product.name}</h2>
                        <h2 className='text-xl font-bold text-gray-500'>${product.price}</h2>
                    </div>
                </div>
                </Link>
  )
}

export default Card