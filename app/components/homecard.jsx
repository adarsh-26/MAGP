'use client'

import React from 'react'
import '.././components/homecard.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Homecard(props) {

  return (
<div className='homecard' >
      <img alt='introimg' src={props.img1}/>
      <p>{props.text}</p>
      </div>
    
  )
}
