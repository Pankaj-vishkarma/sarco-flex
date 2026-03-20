'use client'

import { motion } from 'framer-motion'
import ProductCard from '@/components/ProductCard'

export default function ProductsPage() {
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
    <>
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1319839/pexels-photo-1319839.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="gradient-overlay" />
        <div className="relative z-10 container-custom text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-heading"
          >
            Our <span className="text-industrial-accent">Products</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Premium quality rubber products for every need
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
