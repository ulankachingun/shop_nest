// components/CartSidebar.js
'use client'
import React from 'react'
import CartItem from './CartItem'
import Link from 'next/link'

export default function CartSidebar({ 
  isOpen, 
  cart, 
  onToggleCart, 
  onQuantityChange 
}) {
  return (
    <div className={`fixed top-0 right-0 w-1/3 max-w-full h-screen bg-white border-l border-gray-200 shadow-xl transition-transform duration-500 z-[9999] ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
        <button 
          onClick={onToggleCart} 
          className="text-gray-500 hover:text-purple-500 text-2xl font-bold"
        >
          ×
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 scrollbar-hide">
        {cart.length === 0 ? (
          <p className="text-center text-gray-400 mt-10">Your cart is empty</p>
        ) : (
          cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={onQuantityChange}
            />
          ))
        )}
      </div>

      <div className="px-6 py-4 border-t border-gray-200">
        <Link href="/checkout" className="block w-full text-center bg-violet-500 hover:bg-violet-600 text-white font-semibold py-3 rounded-full transition">
          Checkout
        </Link>
      </div>
    </div>
  )
}
