import { memeArtworks } from '@/assets'
import Image from 'next/image'
import React from 'react'

const MemeGallery = () => {
  return (
    <section id="meme" className="w-full px-4 py-8 md:py-24 sm:container mx-auto">
        <h2 className="text-textColor text-4xl sm:text-7xl font-semibold text-center">
          Meme Gallery
        </h2>
        <hr className="h-12 border-none md:h-42" />

        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {memeArtworks.map((artwork) => (
                <div key={artwork.id}>
                    <Image src={artwork.src} alt={artwork.alt} className="w-full h-auto" />
                </div>
            ))}
        </div>
    </section>
  )
}

export default MemeGallery