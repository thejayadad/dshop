import React from 'react'

const Register = () => {
  return (
    <section className='px-10 py-4x'>
          <h1 className="font-bold text-3xl md:text-5xl text-center mb-8 mt-8">Register</h1>
          <div className='flex flex-col basis-full relative w-auto h-80 bg-wh-500 '>
          <form className=' flex flex-col'>

           <div className='flex flex-col m-auto' style={{maxWidth: "500px"}}>
            <input type="text" placeholder="Email" className="input input-bordered input-xs w-full max-w-xs" />
            <input type="text" placeholder="Username" className="input input-bordered input-xs w-full max-w-xs" />
            <input type="text" placeholder="Password" className="input input-bordered input-xs w-full max-w-xs" />
            <button className='btn'>Register</button>
            </div>

            </form>

            
          </div>
    </section>
  )
}

export default Register