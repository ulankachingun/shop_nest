'use client'
import React from 'react'
import Link from 'next/link'

export default function ProductCard({ product, onAddToCart }) {
  const handleQuickAdd = (e) => {
    e.preventDefault()
    onAddToCart(product.id)
  }

  return (
    <div className="relative group">
      <Link
        href={`/products/${product.id}`}
        className="rounded-2xl shadow flex  flex-col bg-white p-4 hover:shadow-lg transition-shadow "
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-4"
        />
        <h2 className="font-bold text-lg my-2 line-clamp-2 h-12  group-hover:text-violet-600 transition-colors">
          {product.title}
        </h2>
        <div className="text-xl mb-2 font-semibold text-gray-500 group-hover:text-violet-600 ">
          ${product.price}
        </div>
        <div className="text-sm text-gray-500 mb-4 capitalize group-hover:text-violet-600">
          {product.category}
        </div>
        
        <button
          onClick={handleQuickAdd}
          className="bg-violet-500 hover:bg-violet-600  text-white font-semibold  px-5 py-3 rounded-full active:scale-95"
        >
          Add to Cart
        </button>

      </Link>
    </div>
  )
}