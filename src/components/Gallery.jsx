import React from 'react'

const Gallery = () => {
    const cruisesImg = require('./images/tobi-_uq3zI36TtY-unsplash.jpg')
    const resortImg = require('./images/muhammad-novrijal-G7Ch00h8Ong-unsplash.jpg')
    const excursionImg = require('./images/banner.png')
    const cabinetImg = require('./images/huy-phan-EleyBNnodCY-unsplash.jpg')
    const deskImg = require('./images/jose-losada-Sm8TAus1pGs-unsplash.jpg')
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='h-full w-full object-cover' src={cruisesImg} alt="cruise" />
            </div>
            <div>
                <img className='h-full w-full object-cover'src={resortImg} alt="resort" />
            </div>
            <div>
                <img className='h-full w-full object-cover' src={excursionImg} alt="excursion" />
            </div>
            <div>
                <img className='h-full w-full object-cover' src={cabinetImg} alt="/" />
            </div>
            <div>
                <img className='h-full w-full object-cover' src={deskImg} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Gallery