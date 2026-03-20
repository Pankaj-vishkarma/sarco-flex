'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const products = [
    { name: 'Tractor Tyres', slug: 'tractor-tyres' },
    { name: '2/3 Wheeler Tyres', slug: '2-3-wheeler-tyres' },
    { name: 'Industrial Rubber Tiles', slug: 'industrial-rubber-tiles' },
    { name: 'Domestic Tiles', slug: 'domestic-tiles' },
    { name: 'Gym Tiles', slug: 'gym-tiles' },
    { name: 'Children Play Area Tiles', slug: 'play-tiles' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-industrial-dark shadow-lg py-4'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-2xl md:text-3xl font-bold font-heading text-white">
              SARCO <span className="text-industrial-accent">TECH</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-industrial-accent transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-industrial-accent transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <div
              className="relative py-2"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-white hover:text-industrial-accent transition-colors duration-300 font-medium flex items-center space-x-1">
                <span>Products</span>
                <FaChevronDown className="text-xs" />
              </button>
              {isProductsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-xl overflow-hidden"
                >
                  {products.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className="block px-6 py-3 hover:bg-gray-100 transition-colors duration-200 text-gray-800 hover:text-industrial-accent"
                    >
                      {product.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
            <Link
              href="/infrastructure"
              className="text-white hover:text-industrial-accent transition-colors duration-300 font-medium"
            >
              Infrastructure
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-industrial-accent transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
            <Link href="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-6 pb-6"
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-industrial-accent transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-industrial-accent transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div>
                <button
                  className="text-white hover:text-industrial-accent transition-colors duration-300 font-medium flex items-center space-x-1 w-full"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  <span>Products</span>
                  <FaChevronDown className="text-xs" />
                </button>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-xl overflow-hidden"
                  >
                    {/* 🔥 invisible bridge */}
                    <div className="absolute -top-3 left-0 w-full h-3"></div>

                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        className="block px-6 py-3 hover:bg-gray-100 transition-colors duration-200 text-gray-800 hover:text-industrial-accent"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
              <Link
                href="/infrastructure"
                className="text-white hover:text-industrial-accent transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Infrastructure
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-industrial-accent transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="btn-primary inline-block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
