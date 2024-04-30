import React from 'react'

const Activities = () => {
    const resortImg = require('./images/muhammad-novrijal-G7Ch00h8Ong-unsplash.jpg')
    const cruisesImg = require('./images/tobi-_uq3zI36TtY-unsplash.jpg')
    const excursionImg = require('./images/banner.png')
  return (
    <div className='max-w-[1140px] m-auto w-[65%] h-full md:flex mt-[-75px]'>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[40%] left-[50%] translate-x-[-50%] translate-y-[50%] text-white text-2xl font-bold'>Resorts</h3>
            <img 
            className='w-[300px] h-[250px] object-cover relative border-4 border-white shadow-lg'
            src={resortImg} alt="resort" />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[40%] left-[50%] translate-x-[-50%] translate-y-[50%] text-white text-2xl font-bold'>Cruises</h3>
            <img 
            className='w-[300px] h-[250px] object-cover relative border-4 border-white shadow-lg'
            src={cruisesImg} alt="cruise" />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[40%] left-[50%] translate-x-[-50%] translate-y-[50%] text-white text-2xl font-bold'>Excursion</h3>
            <img 
            className='w-[300px] h-[250px] object-cover relative border-4 border-white shadow-lg'
            src={excursionImg} alt="excursion" />
        </div>
    </div>
  )
}

export default Activities