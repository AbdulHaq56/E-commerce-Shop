'use client'
import { heroAirpods, heroBanner } from '@/public'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'


const motionVariant = {
    hidden:{x:0, y:70, opacity:0.25},
    visible:{x:0, y:-10, opacity:1, transition:{delay:0.10}}
}

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className='hero-container'>
            <div className='object-cover'>
                <Image 
                src={heroBanner}
                alt='Banner'
                height="100"
                width="1400"
                />
            </div>
            <div className='hero-airpod'>
                <motion.div
                initial="hidden"
                animate="visible"
                variants={motionVariant}
                >
            <Image 
                src={heroAirpods}
                alt='Logo'
                height="100"
                width="700"
                />
                </motion.div>
            </div>
        </div>

    </div>
  )
}

export default Hero