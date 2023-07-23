'use client'

import React from 'react'
import Link from 'next/link'
import {signIn, signOut, useSession} from 'next-auth/react'
import { NavLinks } from '@/constants'

const Navbar = () => {

  return (
    <header className="navbar bg-base-100 border-b py-5 px-8 flex align-center justify-center">
  <div className="flex-1">
    <Link 
    href={'/'}

    className="btn normal-case text-lg">
     Donut Shop
    </Link>
  </div>
  <div className="flex-none">

    <ul className="menu menu-horizontal text-small">
        {NavLinks.map((link) => (
            <Link className='btn btn-sm mr-3' href={link.href} key={link.text}>
                {link.text}
            </Link>
        ))}
      <li>
        <details>
          <summary className='btn btn-sm bg-secondary'>
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
    </header>
  )
}

export default Navbar