// src/app/products/[id]/page.js
'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Navbar from '../../../../components/Navbar'
import CartSidebar from '../../../../components/CartSidebar'
import Link from 'next/link'
import { useCart } from '../../../../hooks/useCart'

export default function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedQuantity, setSelectedQuantity] = useState(1)
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  const { 
    cart, 
    addToCart, 
    changeQuantity, 
    getTotalQuantity 
  } = useCart()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json()
        setProduct(data)
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const toggleCart = () => setIsCartOpen(!isCartOpen)

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity: selectedQuantity })
    }
  }

  if (loading) {
    return (
      <div>loading</div>
    )
  }



  return (
    <div className="transition-transform duration-1000">
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Navbar 
            cartQuantity={getTotalQuantity()} 
            onCartToggle={toggleCart}
          />

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8">
              <div className="flex justify-center items-center bg-gray-50 rounded-xl p-8">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="max-w-full max-h-96 object-contain"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = '/placeholder-product-image.png'
                  }}
                />
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                    {product.category}
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h1>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-3xl font-bold text-green-600">
                      ${product.price}
                    </span>
                    {product.rating && (
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="ml-1 text-gray-600">
                          {product.rating.rate} ({product.rating.count} reviews)
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity
                    </label>
                    <div className="flex items-center space-x-3">
                      <button
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
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-black py-4 px-8 font-semibold text-lg rounded-full active:scale-95 block text-center"
                  >
                    Add to Cart - ${(product.price * selectedQuantity).toFixed(2)}
                  </button>

                  <Link
                    href="/checkout"
                    className="w-full bg-violet-500 hover:bg-violet-600 text-white py-4 px-8 font-semibold text-lg rounded-full active:scale-95 block text-center"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CartSidebar
        isOpen={isCartOpen}
        cart={cart}
        onToggleCart={toggleCart}
        onQuantityChange={changeQuantity}
      />
    </div>
  )
}