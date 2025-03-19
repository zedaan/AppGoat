import React from 'react'
import { shadow } from '@/styles/utils'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <header className='relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8'
      style={{
        boxShadow: shadow,
      }}
    >
        <Link href="/">
            <Image
                src="/goatius.png"
                alt="Goat Notes Logo"
                width={60}
                height={60}
                className="rounded-full"
                priority
            />
        </Link>    
    </header>
  )
}

export default Header