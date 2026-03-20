import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: 'Sarco Tech Industries - Premium Tyre Retreading Solutions',
  description: 'Leaders in rubber manufacturing industry. High-quality, durable rubber products for tyre re-treading, industrial tiles, and more.',
  keywords: 'tyre retreading, rubber products, industrial tiles, tractor tyres, bike tyres, gym tiles',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
