import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="mx-1 lg:mx-40 sticky top-0 p-8 rounded-lg">
      <div className="flex justify-between">
        <Link href="/">
          <a className="font-bold text-3xl bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            CryptoDash
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
