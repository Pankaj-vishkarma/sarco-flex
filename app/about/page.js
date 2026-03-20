'use client'

import { motion } from 'framer-motion'
import { FaIndustry, FaUsers, FaLeaf, FaAward } from 'react-icons/fa'

export default function AboutPage() {
  const values = [
    {
      icon: FaIndustry,
      title: '30+ Years Experience',
      description: 'Three decades of expertise in rubber technology and manufacturing',
    },
    {
      icon: FaAward,
      title: 'Premium Quality',
      description: 'Highest quality materials and strict manufacturing processes',
    },
    {
      icon: FaLeaf,
      title: 'Sustainability Focus',
      description: 'Eco-friendly materials and processes for a better future',
    },
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Skilled professionals dedicated to client satisfaction',
    },
  ]

  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="gradient-overlay" />
        <div className="relative z-10 container-custom text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-heading"
          >
            About <span className="text-industrial-accent">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Leading the rubber manufacturing industry for over three decades
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-industrial-dark">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We envision a future where re-treaded tyres are the norm, not the
                exception. By providing superior rubber solutions, we aim to lead the
                industry towards a more sustainable and economical approach to tyre usage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Sarco, we pride ourselves on being at the forefront of tyre re-treading
                solutions. As leaders in the rubber manufacturing industry, our mission is
                to deliver high-quality, durable rubber products that extend the life of
                your tyres, ensuring safety, performance, and sustainability on every road.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://sarco-flex.com/img/TYRE1.webp)',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading text-industrial-dark">
              Our <span className="text-industrial-accent">Core Values</span>
            </h2>
            <p className="section-subheading">
              The principles that drive our success and commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg card-hover text-center"
              >
                <value.icon className="text-5xl text-industrial-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold font-heading mb-3 text-industrial-dark">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
