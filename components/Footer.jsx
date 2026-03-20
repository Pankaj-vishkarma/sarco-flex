'use client'

import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const products = [
    { name: 'Tractor Tyres', slug: 'tractor-tyres' },
    { name: '2/3 Wheeler Tyres', slug: '2-3-wheeler-tyres' },
    { name: 'Industrial Rubber Tiles', slug: 'industrial-rubber-tiles' },
    { name: 'Domestic Tiles', slug: 'domestic-tiles' },
    { name: 'Gym Tiles', slug: 'gym-tiles' },
    { name: 'Play Area Tiles', slug: 'play-tiles' },
  ]

  return (
    <footer className="bg-industrial-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold font-heading mb-6">
              SARCO <span className="text-industrial-accent">TECH</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leaders in rubber manufacturing industry, delivering high-quality,
              durable rubber products for over 30 years.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-industrial-accent rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-industrial-accent rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-industrial-accent rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-industrial-accent rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 font-heading">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-industrial-accent transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-industrial-accent transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-industrial-accent transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/infrastructure" className="text-gray-300 hover:text-industrial-accent transition-colors duration-300">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-industrial-accent transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 font-heading">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-gray-300 hover:text-industrial-accent transition-colors duration-300"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 font-heading">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-industrial-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Sarco Tech Industries, Industrial Area, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-industrial-accent flex-shrink-0" />
                <span className="text-gray-300">+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-industrial-accent flex-shrink-0" />
                <span className="text-gray-300">info@sarco-flex.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2016 All rights reserved. SARCO TECH INDUSTRIES</p>
            <p className="mt-2 md:mt-0">
              Designed with excellence for industrial solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
