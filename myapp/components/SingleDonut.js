import React from 'react'

const SingleDonut = () => {
  return (
    <div className='lg:w-1/3 md:w-1/3 sm:w-1/2 bg-white'style={{height: "385px"}}>
        <div className='flex relative'>
            <img
            className='absolute inset-0 w-full h-[385px] object-cover object-center overflow-hidden'
                src='https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt='pic'
            />
            <div 
            className="px-8 py-10 h-[385px]  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-40">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p className="leading-relaxed text-black">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
    </div>
  )
}

export default SingleDonut