import React from 'react'
import Link from 'next/link'

const FeaturedCard = ({}) => {
  return (
    <div>
        <Link
      className={' sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70'}
        href={'/'}
        >
            <div className='z-0 relative w-full h-full'>
                {/* <img
                      fill
                      alt="tech"
                      placeholder="blur"
                      src='https://images.pexels.com/photos/17282005/pexels-photo-17282005/free-photo-of-fashion-people-woman-dark.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                      sizes="(max-width: 480px) 100vw,
                            (max-width: 768px) 75vw,
                            (max-width: 1060px) 50vw,
                            33vw"
                      style={{ objectFit: "cover", maxHeight: "500px" }}
                /> */}

            </div>
            <div className="absolute z-1 top-0 left-0 w-full h-full" />
            <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent text-wh-900">
          category
        </h4>
        <div className="text-wh-100 mt-2">Title</div>
            <div/>
        </div>
        </Link>

    </div>
  )
}

export default FeaturedCard