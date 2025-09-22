'use client'
import React from 'react'
import Link from 'next/link';

export default function CartItem({ item, onQuantityChange }) {
  return (
    <div className="w-full h-64  bg-contain bg-right bg-no-repeat my-5 sm:bg-white md:bg-[url(https://www.apple.com/v/macbook-air/v/images/overview/hero/hero_endframe__c67cz35iy9me_large.png)]">
        <h1 className="text-5xl font-bold mb-5 ">
            Shop The 
            <br/>
            Latest Product
        </h1>
        <p className="text-gray-500 mb-5">
            Check out our new arrivals and 
            <br/>
            best selling items
        </p>
        <a
            href="/products"
        
        className="bg-violet-500 hover:bg-violet-600  text-white font-semibold  px-5 py-3 rounded-full active:scale-95"
        
        >
        Shop Now
        

        </a>
    </div>
  )
}