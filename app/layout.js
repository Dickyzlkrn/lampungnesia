// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow' // <-- 1. Impor komponen baru

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Lampungnesia - Jelajahi Lampung',
  description: 'A modern and minimalist template for startups, agencies, and creatives, built with Next.js and Framer Motion.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <CursorGlow /> {/* <-- 2. Letakkan di sini */}
        <div className="relative z-40"> {/* Kita butuh wrapper ini */}
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