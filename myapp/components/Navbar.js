import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <header >
        <div className="navbar bg-base-100 text-wh-10 px-10 py-4x`">
  <div className="flex-1 ">
    <a className="bg-secondary py-2 px-8 text-primary-200 text-sm font-bold hover:bg-info cursor-pointer ">Donut Shop</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li><Link href={'register'}>Register</Link></li>

      <li>
        <details>
          <summary>
            Parent
          </summary>
          <ul className="p-2 bg-base-100">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
<div className="flex justify-between gap-8 mt-5 mb-4 mx-10">
        <div className="basis-2/3 md:mt-3">
          <h1 className="font-bold text-3xl md:text-5xl">THE DONUT SHOP</h1>
          <p className="text-sm mt-3">
            The place to share, admire, & meet new tasty treats
          </p>
        </div>
        <div className="basis-full relative w-auto h-32 bg-wh-500">
         
        </div>
      </div>
      <hr className="border-1 mx-10" />

    </header>
  )
}

export default Navbar