'use client'

import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg card-hover cursor-pointer h-full">
        <div className="relative h-64 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transform transition-transform duration-500 hover:scale-110"
            style={{ backgroundImage: `url(${product.image})` }}
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold font-heading mb-3 text-industrial-dark">
            {product.name}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center text-industrial-accent font-semibold group-hover:translate-x-2 transition-transform duration-300">
            <span className="mr-2">Learn More</span>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </Link>
  )
}
