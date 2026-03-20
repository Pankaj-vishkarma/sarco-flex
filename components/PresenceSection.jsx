'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function PresenceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const locations = [
    {
      name: 'GUJARAT',
      image: 'https://sarco-flex.com/img/gujarat.webp',
    },
    {
      name: 'RAJASTHAN',
      image: 'https://sarco-flex.com/img/rajasthan.webp',
    },
    {
      name: 'MAHARASHTRA',
      image: 'https://sarco-flex.com/img/maharashtra.webp',
    },
    {
      name: 'MADHYA PRADESH',
      image: 'https://sarco-flex.com/img/madhyaPradesh.webp',
    },
  ]

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-industrial-dark">
            OUR <span className="text-industrial-accent">PRESENCE</span>
          </h2>
          <p className="section-subheading">
            Serving clients across multiple states with excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-lg card-hover"
            >
              <div
                className="h-72 bg-cover bg-center"
                style={{ backgroundImage: `url(${location.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark via-industrial-dark/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <FaMapMarkerAlt className="text-4xl text-industrial-accent mb-4" />
                <h3 className="text-2xl font-bold font-heading">
                  {location.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
