"use client"

import React from 'react'
import CountUp from "react-countup"

const AnimatedCounter = ({amount}: {amount: number} ) => {
  return (
    <div className='w-full'>
      <CountUp
      duration={2.5}
      decimals={2}
      end={amount} decimal=',' prefix='$'/>
    </div>
  )
}

export default AnimatedCounter
