'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import ProductCard from './ProductCard'

export default function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const products = [
    {
      name: 'Tractor tyre',
      description:
        'Tractor tyres are produced with sustainable solution with ensuring the best quality for agriculture without impacting land quality.',
      image: 'https://sarco-flex.com/img/Tractor_tyre.webp',
      slug: 'tractor-tyres',
    },
    {
      name: '2/3 Wheeler Tyres',
      description:
        'Bike tyres are produced with best quality material to increase its strength and mileage.',
      image: 'https://sarco-flex.com/img/2_3_wheeler_tyre.webp',
      slug: '2-3-wheeler-tyres',
    },
    {
      name: 'Industrial Rubber Tiles',
      description:
        'Industrial tiles are produced using the scrap material to reduce the landfills. We use specialized techniques to increase its strength and durability to cater industrial needs.',
      image: 'https://sarco-flex.com/img/Industrial_rubber.webp',
      slug: 'industrial-rubber-tiles',
    },
    {
      name: 'Domestic tiles',
      description:
        'Industrial tiles are produced using the scrap material to reduce the landfills. We use specialized techniques to increase its strength and durability to cater industrial needs.',
      image: 'https://sarco-flex.com/img/domestic_tiles.webp',
      slug: 'domestic-tiles',
    },
    {
      name: 'Gym tiles',
      description:
        'Industrial tiles are produced using the scrap material to reduce the landfills. We use specialized techniques to increase its strength and durability to cater industrial needs.',
      image: 'https://sarco-flex.com/img/gym_tiles.webp',
      slug: 'gym-tiles',
    },
    {
      name: 'Children play area tiles',
      description:
        'Industrial tiles are produced using the scrap material to reduce the landfills. We use specialized techniques to increase its strength and durability to cater industrial needs.',
      image: 'https://sarco-flex.com/img/play_tiles.webp',
      slug: 'play-tiles',
    },
  ]

  return (
    <section className="py-20 bg-industrial-dark" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-white">
            PRODUCTS <span className="text-industrial-accent">Product Portfolio</span>
          </h2>
          <p className="section-subheading text-gray-300">
            Discover our comprehensive range of high-quality rubber products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
