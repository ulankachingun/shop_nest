'use client'

import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className="w-full h-full flex justify-center items-center ">
        <Link
            href="/products"
            className="underline"
        >
            <p>Click Here</p>
        </Link>

    </div>
  )
}



// 'use client'
// import { useState } from 'react'
// import Navbar from '../../components/Navbar'
// import ProductGrid from '../../components/ProductGrid'
// import CartSidebar from '../../components/CartSidebar'
// import { useProducts } from '../../hooks/useProduct'
// import { useCart } from '../../hooks/useCart'
// import Slider from '../../components/Slider'

// export default function Home() {
//   const [isCartOpen, setIsCartOpen] = useState(false)
  
//   const { products, loading } = useProducts()
//   const { 
//     cart, 
//     addToCart, 
//     changeQuantity, 
//     getTotalQuantity 
//   } = useCart()

//   const handleAddToCart = (productId) => {
//     const product = products.find(p => p.id === productId)
//     addToCart(product)
//   }

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen)
//   }



//   return (
//     <div>
//       <div className="w-full max-w-6xl mx-auto px-4">
//         <Navbar cartQuantity={getTotalQuantity()} onCartToggle={toggleCart} />

//         <Slider/>
//         <h1>Categories</h1>
        
//       </div>

//       <CartSidebar
//         isOpen={isCartOpen}
//         cart={cart}
//         onToggleCart={toggleCart}
//         onQuantityChange={changeQuantity}
//       />
//     </div>
//   )
// }
