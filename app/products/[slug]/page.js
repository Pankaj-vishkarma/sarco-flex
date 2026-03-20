'use client'

import { use } from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const productsData = {
  'tractor-tyres': {
    name: 'Tractor Tyres',
    description:
      'Tractor tyres are produced with sustainable solution with ensuring the best quality for agriculture without impacting land quality.',
    image: 'https://sarco-flex.com/img/Tractor_tyre.webp',
    features: [
      'High durability for agricultural use',
      'Superior traction on various terrains',
      'Sustainable production methods',
      'Extended lifespan',
      'Excellent load-bearing capacity',
    ],
  },
  '2-3-wheeler-tyres': {
    name: '2/3 Wheeler Tyres',
    description:
      'Bike tyres are produced with best quality material to increase its strength and mileage.',
    image: 'https://sarco-flex.com/img/2_3_wheeler_tyre.webp',
    features: [
      'Premium quality materials',
      'Enhanced strength and durability',
      'Improved mileage performance',
      'Better grip and control',
      'Weather-resistant design',
    ],
  },
  'industrial-rubber-tiles': {
    name: 'Industrial Rubber Tiles',
    description:
      'Industrial tiles are produced using the scrap material to reduce the landfills. We use specialized techniques to increase its strength and durability to cater industrial needs.',
    image: 'https://sarco-flex.com/img/Industrial_rubber.webp',
    features: [
      'Made from recycled materials',
      'Heavy-duty industrial strength',
      'Slip-resistant surface',
      'Easy to install and maintain',
      'Environmentally sustainable',
    ],
  },
  'domestic-tiles': {
    name: 'Domestic Tiles',
    description:
      'Industrial tiles are produced using the scrap material to reduce the landfills. We use specialized techniques to increase its strength and durability to cater industrial needs.',
    image: 'https://sarco-flex.com/img/domestic_tiles.webp',
    features: [
      'Eco-friendly production',
      'Durable for home use',
      'Easy maintenance',
      'Comfortable surface',
      'Reduces landfill waste',
    ],
  },
  'gym-tiles': {
    name: 'Gym Tiles',
    description:
      'Industrial tiles are produced using the scrap material to reduce the landfills. We use specialized techniques to increase its strength and durability to cater industrial needs.',
    image: 'https://sarco-flex.com/img/gym_tiles.webp',
    features: [
      'Shock-absorbing properties',
      'Heavy equipment compatible',
      'Non-slip surface',
      'Sound dampening',
      'Easy to clean',
    ],
  },
  'play-tiles': {
    name: 'Children Play Area Tiles',
    description:
      'Industrial tiles are produced using the scrap material to reduce the landfills. We use specialized techniques to increase its strength and durability to cater industrial needs.',
    image: 'https://sarco-flex.com/img/play_tiles.webp',
    features: [
      'Child-safe materials',
      'Impact cushioning',
      'Bright and colorful options',
      'Weather resistant',
      'Easy to clean and maintain',
    ],
  },
}

export default function ProductDetailPage({ params }) {
  const { slug } = use(params)
  const router = useRouter()
  const product = productsData[slug]


  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container-custom">
          <Link
            href="/products"
            className="inline-flex items-center text-industrial-accent hover:text-orange-600 mb-8 font-semibold"
          >
            <FaArrowLeft className="mr-2" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-industrial-dark">
                {product.name}
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {product.description}
              </p>

              <h3 className="text-2xl font-bold font-heading mb-4 text-industrial-dark">
                Key Features
              </h3>
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-industrial-accent mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => router.replace('/contact')}
                className="btn-primary"
              >
                Request a Quote
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
