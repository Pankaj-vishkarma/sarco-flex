'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { FaQuoteRight } from 'react-icons/fa'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="gradient-overlay" />

      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <FaQuoteRight className="text-6xl text-industrial-accent mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Ready to Experience the Sarco Difference?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light">
            Reach out to us today to learn more about our products and how we can
            help you achieve your goals. Together, we can drive towards a better,
            more sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <Link href="/products" className="btn-outline">
              Explore Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
