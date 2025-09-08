// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Lampungnesia - Jelajahi Lampung',
  description: 'Platform untuk menjelajahi keindahan Lampung',
  icons: {
    icon: '/images/lpg.png',       // favicon utama
    shortcut: '/images/lpg.png',   // untuk browser lama
    apple: '/images/lpg.png',      // untuk iOS
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <CursorGlow />
        <div className="relative z-40">
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
