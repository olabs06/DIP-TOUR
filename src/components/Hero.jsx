import React from 'react'

const Hero = () => {
    const heroImg = require('./images/shifaaz-shamoon-okVXy9tG3KY-unsplash.jpg')
  return (
    <div className='w-full h-[90vh] '>
        <img src={heroImg} 
        alt="/" 
        className='w-full h-full object-cover'
        />
    <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h1 className='font-bold text-4xl'>Find your Special Trip</h1>  
          <h2 className='text-4xl py-4 italic' >With Dip Tour</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corrupti animi quibusdam. Molestiae, porro. Omnis officiis dicta, recusandae illum deserunt asperiores corporis nam repellendus nostrum obcaecati eveniet earum veritatis. Repudiandae!</p>
        </div>
    </div>
    </div>
  )
}

export default Hero