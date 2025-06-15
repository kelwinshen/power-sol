import { headerImage } from '../assets'
import Image from 'next/image'
import React from 'react'

const HeaderImage = () => {
  return (
    <>
        <section className="w-full h-[200px] sm:h-auto  mt-[90px] sm:mt-[100px] relative ">
        <Image
          src={headerImage}
          alt="header"
          className="w-full h-full object-cover"
        />
      </section>
    </>
  )
}

export default HeaderImage