
// hooks/useCart.js
'use client'
import { useState, useEffect } from 'react'

export function useCart() {
  const [cart, setCart] = useState([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart))
    } else {
      localStorage.removeItem('cart')
    }
  }, [cart])

  const addToCart = (product) => {
    if (!product) return

    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const changeQuantity = (productId, type) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQuantity = type === '+' ? item.quantity + 1 : item.quantity - 1
        return newQuantity <= 0 ? null : { ...item, quantity: newQuantity }
      }
      return item
    }).filter(Boolean))
  }

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const clearCart = () => {
    setCart([])
  }

  return {
    cart,
    addToCart,
    changeQuantity,
    getTotalQuantity,
    getTotalPrice,
    clearCart
  }
}