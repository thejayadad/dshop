import React from 'react'
import FeaturedCard from './FeaturedCard'

const Featured = () => {
  return (
    <section className='pt-3 pb-10'>
        <div className='flex items-center gap-3'>
            <div className='bg-secondary py-2 px-8 text-sm font-bold hover:bg-info cursor-pointer' >
                FEATURED
            </div>
            <p className=''>
                Swip To See The Favorites!
            </p>
           
        </div>
        <div className='flex justify-between gap-3 my-3 carousel carousel-end rounded-box' >
                <div className='basis-1/2 bg-wh-500 h-96 carousel-item'>
                <FeaturedCard />

                </div>
                <div className='basis-1/2 bg-wh-500 h-96 carousel-item'>
                <FeaturedCard />

            </div>
            <div className='basis-1/2 bg-wh-500 h-96 carousel-item'>
            <FeaturedCard />

     </div>
     <div className='basis-1/2 bg-wh-500 h-96 carousel-item'>
     <FeaturedCard />

     </div>
     <div className='basis-1/2 bg-wh-500 h-96 carousel-item'>
     <FeaturedCard />

     </div>
            </div>
    </section> 
  )
}

export default Featured