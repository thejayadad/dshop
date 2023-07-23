import React from 'react'
import SingleDonut from './SingleDonut'

const DonutList = () => {
  return (
    <section className='px-4  py-10 bg-warning w-full'>
        <div className='flex flex-wrap -m-4 gap-4 justify-center'>
            <SingleDonut />
            <SingleDonut />
            <SingleDonut />
            <SingleDonut />
            <SingleDonut />
            <SingleDonut />

        </div>
    </section>
  )
}

export default DonutList