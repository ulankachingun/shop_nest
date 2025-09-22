
// components/CartItem.js
'use client'
import React from 'react'

export default function CartItem({ item, onQuantityChange }) {
  return (
    <div className="grid grid-cols-[50px_1fr_70px] items-center gap-5 mb-5">
      <img 
        src={item.image} 
        alt={item.title}
        className="w-full h-16 object-cover rounded-lg"
      />
      <div>
        <div className="font-bold text-sm">
          {item.title.substring(0, 30)}...
        </div>
        <div className="text-sm">
          ${item.price} / 1 product
        </div>
      </div>
      <div className="flex justify-end items-center">
        <button
          onClick={() => onQuantityChange(item.id, '-')}
          className="p-2 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600 hover:text-gray-900"
          >
          -
        </button>
        <span className="block w-12 text-center px-3">{item.quantity}</span>
        <button
          onClick={() => onQuantityChange(item.id, '+')}
          className="p-2 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600 hover:text-gray-900"
        >
          +
        </button>
      </div>
    </div>
  )
}

{/* <button
                        onClick={() => setSelectedQuantity(Math.max(1, selectedQuantity - 1))}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                      >
                        -
                      </button>
                      <span className="w-12 text-center font-semibold">
                        {selectedQuantity}
                      </span>
                      <button
                        onClick={() => setSelectedQuantity(selectedQuantity + 1)}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                      >
                        +
                      </button> */}