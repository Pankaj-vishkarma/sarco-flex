'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
            About Us <span className="text-industrial-accent">VISION</span>
          </h2>
          <p className="section-subheading">
            We envision a future where re-treaded tyres are the norm, not the exception.
            By providing superior rubber solutions, we aim to lead the industry towards a
            more sustainable and economical approach to tyre usage.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
