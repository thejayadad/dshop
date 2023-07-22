import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='navbar bg-base-400 pt-3 pb-10'>
  <div className="flex-1">
    <a className="btn bg-secondary normal-case text-lg">DONUT SHOP</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    <li><Link href={'/archive'} className='btn btn-sm mr-4'>Archive</Link></li>

      <li><a className='btn btn-sm mr-4'>About</a></li>
      <li><a className='btn btn-sm mr-4'>Contact</a></li>


      <li>
        <details>
          <summary className='btn btn-sm'>
            User
          </summary>
          <ul className="p-2 bg-base-100">
            <li><Link href={'/social/userHome'}>User Home</Link></li>
            <li><button>Logout</button></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
    </header>
  )
}

export default Navbar