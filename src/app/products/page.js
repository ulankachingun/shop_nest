
'use client'
import { useState } from 'react'
import Navbar from '../../../components/Navbar'
import ProductCard from '../../../components/ProductCard'
import CartSidebar from '../../../components/CartSidebar'
import { useProducts } from '../../../hooks/useProduct'
import { useCart } from '../../../hooks/useCart'
import Slider from '../../../components/Slider'

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  const { products, loading } = useProducts()
  const { 
    cart, 
    addToCart, 
    changeQuantity, 
    getTotalQuantity 
  } = useCart()

  const handleAddToCart = (productId) => {
    const product = products.find(p => p.id === productId)
    addToCart(product)
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div>
      <div className="w-full max-w-6xl mx-auto px-4">
        <Navbar 
          cartQuantity={getTotalQuantity()} 
          onCartToggle={toggleCart} 
        />
        <Slider/>
        
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              />
          ))}
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
