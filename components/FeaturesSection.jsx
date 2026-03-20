'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaAward, FaLeaf, FaCog } from 'react-icons/fa'

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: FaCog,
      title: 'OUR EXPERTISE',
      description:
        'At SARCO FLEX, we have a team of experts with 3 decades of experience in the rubber technology. We use our knowledge and expertise to provide our clients with the best solutions to their needs.',
      image: 'https://sarco-flex.com/img/TYRE1.webp',
    },
    {
      icon: FaAward,
      title: 'OUR QUALITY',
      description:
        'Quality is at the core of everything we do. We use the highest quality materials and follow strict manufacturing processes to ensure that our products meet the highest standards of quality and durability.',
      image: 'https://sarco-flex.com/img/TYRE2.webp',
    },
    {
      icon: FaLeaf,
      title: 'OUR SUSTAINABILITY',
      description:
        'We are committed to sustainability and reducing our environmental impact. We use eco-friendly materials and processes and work with our clients to find sustainable solutions to their rubber and plastics needs.',
      image: 'https://sarco-flex.com/img/TYRE3.webp',
    },
  ]

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg card-hover">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${feature.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark via-industrial-dark/50 to-transparent opacity-90" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <feature.icon className="text-4xl text-industrial-accent mb-4" />
                  <h3 className="text-2xl font-bold font-heading mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
