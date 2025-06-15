import React from 'react'

const RoadMap = () => {
  return (
    <section id="roadmap" className="w-full px-4 py-8 md:py-24 sm:container mx-auto">
      <h2 className="text-textColor text-4xl sm:text-7xl font-semibold text-center">
        Road Map
      </h2>
      <hr className="h-8 border-none md:h-12" />
      <div className="flex flex-col md:flex-wrap md:flex-row gap-8  lg:w-[800px] md:mx-auto  md:justify-center">
        <div className="md:w-[300px] bg-primaryColor border-[3px] border-black rounded-lg px-8 py-5 flex flex-col gap-3">
          <h2 className="text-3xl "><b>CTO</b></h2>
          <p className="text-lg">
          Execute all the social and documentation for the future
          </p>
        </div>
        <div className="md:w-[300px] bg-primaryColor border-[3px] border-black rounded-lg px-8 py-5 flex flex-col gap-3">
          <h2 className="text-3xl "><b>Community Marketing</b></h2>
          <p className="text-lg">
          Collective community marketing push, harnessing shared assets and unified slogans to capture attention and amplify impact.
          </p>
        </div>
        <div className="md:w-[300px] bg-primaryColor border-[3px] border-black rounded-lg px-8 py-5 flex flex-col gap-3">
          <h2 className="text-3xl "><b>PFP</b></h2>
          <p className="text-lg">
          Presenting Power-PFP NFT for token holders as a Power-gang!</p>
        </div>
        <div className="md:w-[300px] bg-primaryColor border-[3px] border-black rounded-lg px-8 py-5 flex flex-col gap-3">
          <h2 className="text-3xl "><b>More</b></h2>
          <p className="text-lg">
          Something special is coming!</p>
        </div>
        
      </div>
      
    </section>
  )
}

export default RoadMap