import { power3 } from '../assets'
import Image from 'next/image'
import React from 'react'

const FullImage2 = () => {
  return (
    <section className="w-full">
        <Image src={power3} alt="power3" className="w-full h-auto" />
      </section>
  )
}

export default FullImage2