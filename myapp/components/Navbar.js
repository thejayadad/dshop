'use client'

import React from 'react'
import Link from 'next/link'
import {signIn, signOut, useSession} from 'next-auth/react'
import { NavLinks } from '@/constants'

const Navbar = () => {
  const {data: session} = useSession()

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
        {

          session?.user
          ? (
            <>
          <li>

          <details>
          <summary className='btn btn-sm bg-secondary'>
            Parent
          </summary>
          <ul className="p-2 bg-base-100">
            <li><Link className='btn' href={'/create-donut'}>Create Donut</Link></li>
            <li><button>Log Out</button></li>
          </ul>
        
        </details>
        </li>
            </>

          ) : (
            <>
              <div className='flex'>
              <li><Link className='btn btn-sm mr-2' href={'/register'}>Register</Link></li>
            <li><Link className='btn btn-sm' href={'/login'}>Login</Link></li>
              </div>
            </>
          )
        }


    </ul>
  </div>
    </header>
  )
}

export default Navbar