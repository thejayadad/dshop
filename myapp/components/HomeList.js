import React from 'react'
import Image from 'next/image'

const HomeList = () => {
  return (
    <section className='pt-3 pb-10'>
       <div className="container px-5 py-24 mx-auto">
        <div className='flex flex-wrap -m-4 gap-4'>
            <div className='lg:w-1/3 sm:w-1/2 p-4 h-80 rounded-md bg-orange-500'>
            <div className='flex relative'>
            <Image alt="gallery" 
            width={100}
            height={100}
            
            className="absolute inset-0 w-full h-full object-cover object-center bg-red-300" 
            src="https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
        
            </div>  
            <h2>Home</h2>

            </div>
            <div className='lg:w-1/3 sm:w-1/2 p-4 bg-red-600'>
            <div className='flex relative'>
            <Image alt="gallery" 
            width={100}
            height={100}
            className="absolute inset-0 w-full h-full object-cover object-center" 
            src="https://images.pexels.com/photos/179907/pexels-photo-179907.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
        
            </div>  
            <h2>Home</h2>

            </div>
            <div className='lg:w-1/3 sm:w-1/2 p-4'>
            <div className='flex relative'>
            <Image alt="gallery" 
            width={100}
            height={100}
            className="absolute inset-0 w-full h-full object-cover object-center" 
            src="https://images.pexels.com/photos/179907/pexels-photo-179907.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
        
            </div>  
            <h2>Home</h2>

            </div>
            <div className='lg:w-1/3 sm:w-1/2 p-4'>
            <div className='flex relative'>
            <Image alt="gallery" 
            width={100}
            height={100}
            className="absolute inset-0 w-full h-full object-cover object-center" 
            src="https://images.pexels.com/photos/179907/pexels-photo-179907.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
        
            </div>  
            <h2>Home</h2>

            </div>
            <div className='lg:w-1/3 sm:w-1/2 p-4'>
            <div className='flex relative'>
            <img alt="gallery" 
            width={100}
            height={100}
            className="absolute inset-0 w-full h-full object-cover object-center" 
            src="https://images.pexels.com/photos/179907/pexels-photo-179907.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
        
            </div>  
            <h2>Home</h2>

            </div>
          
        </div>
        </div>
    </section>
  )
}

export default HomeList