'use client'

import { motion } from 'framer-motion'
import { FaCog, FaLeaf, FaAward } from 'react-icons/fa'

export default function InfrastructurePage() {
  const facilities = [
    {
      icon: FaCog,
      title: 'State-of-the-Art Manufacturing',
      description:
        'Our manufacturing facility is equipped with the latest technology and machinery to ensure precision and quality in every product we make.',
      image: 'https://sarco-flex.com/img/TYRE1.webp',
    },
    {
      icon: FaAward,
      title: 'Quality Control Laboratory',
      description:
        'Advanced testing and quality control systems ensure that every product meets the highest standards before reaching our customers.',
      image: 'https://sarco-flex.com/img/TYRE2.webp',
    },
    {
      icon: FaLeaf,
      title: 'Sustainable Practices',
      description:
        'Our facility incorporates eco-friendly processes and waste management systems to minimize environmental impact.',
      image: 'https://sarco-flex.com/img/TYRE3.webp',
    },
  ]

  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="gradient-overlay" />
        <div className="relative z-10 container-custom text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-heading"
          >
            Our <span className="text-industrial-accent">Infrastructure</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Modern facilities equipped with advanced technology
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-industrial-dark">
              World-Class Facilities
            </h2>
            <p className="section-subheading">
              Our infrastructure is designed to deliver excellence in every product
            </p>
          </motion.div>

          <div className="space-y-20">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <facility.icon className="text-5xl text-industrial-accent mb-6" />
                  <h3 className="text-3xl font-bold font-heading mb-4 text-industrial-dark">
                    {facility.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
                <div
                  className={`relative h-[400px] rounded-lg overflow-hidden shadow-2xl ${
                    index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${facility.image})` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
