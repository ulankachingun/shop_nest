'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Checkout() {
  const [cart, setCart] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    country: '',
    city: ''
  })

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here!')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side - Cart Items */}
          <div>
            <Link href="/products" className="text-blue-600 hover:underline">
              ← keep shopping
            </Link>
            <h1 className="text-2xl font-bold mt-5 mb-8 pt-5 border-t border-gray-200">
              List Product in Cart
            </h1>
            
            <div className="space-y-6">
              {cart.map(item => (
                <div key={item.id} className="grid grid-cols-[80px_1fr_50px_80px] items-center gap-5 p-4 shadow-lg rounded-2xl bg-white">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="h-20 w-full object-contain  rounded"
                  />
                  <div>
                    <div className="text-lg font-bold">{item.title}</div>
                    <div className="text-gray-600">${item.price}/1 product</div>
                  </div>
                  <div className="text-center font-medium">{item.quantity}</div>
                  <div className="text-lg font-bold text-right">
                    ${item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Checkout Form */}
          <div className="bg-indigo-600 rounded-2xl p-10 text-white">
            <h1 className="text-2xl font-bold mb-8">Checkout</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-5 border-b border-indigo-400 mb-5">
              <div className="md:col-span-2">
                <label htmlFor="name" className="block mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-2xl border-none bg-indigo-500 text-white placeholder-indigo-200"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="phone" className="block mb-2">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-2xl border-none bg-indigo-500 text-white placeholder-indigo-200"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="address" className="block mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-2xl border-none bg-indigo-500 text-white placeholder-indigo-200"
                  placeholder="Enter your address"
                />
              </div>
              
              <div>
                <label htmlFor="country" className="block mb-2">Country</label>
                <select
                  name="country"
                  id="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-2xl border-none bg-indigo-500 text-white"
                >
                  <option value="">Choose...</option>
                  <option value="uk">United Kingdom</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="city" className="block mb-2">City</label>
                <select
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-2xl border-none bg-indigo-500 text-white"
                >
                  <option value="">Choose...</option>
                  <option value="london">London</option>
                  <option value="manchester">Manchester</option>
                  <option value="birmingham">Birmingham</option>
                </select>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="space-y-3 mb-5">
              <div className="flex justify-between items-center">
                <div>Total Quantity</div>
                <div className="font-bold text-xl">{getTotalQuantity()}</div>
              </div>
              <div className="flex justify-between items-center">
                <div>Total Price</div>
                <div className="font-bold text-xl">${getTotalPrice()}</div>
              </div>
            </div>
            
            <button
              onClick={handleCheckout}
              className="w-full h-12 border-none rounded-2xl bg-teal-400 text-white font-bold text-lg hover:bg-teal-500 transition-colors"
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
