// components/Navbar.js
'use client'
import React from 'react'
import Link from 'next/link'

export default function Navbar({ cartQuantity, onCartToggle }) {
  return (
    <header className="flex items-center justify-between py-5 sticky top-0 z-[999] bg-white">
      <Link href="/products">
        <img
          src="/images/Logo and Name but Bold.png"
          className="h-16 cursor-pointer"
          alt="Logo"
        />
      </Link>

      <div className="relative z-10 cursor-pointer" onClick={onCartToggle}>
        <div className="w-16 h-16 flex items-center justify-center text-5xl">
          <p>
          🛒
          </p>
        </div>
        <div className="absolute -top-2 -right-2 bg-violet-400  text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transform translate-x-5">
          {cartQuantity}
        </div>
      </div>
    </header>
  )
}
