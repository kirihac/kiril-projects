import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

import NavBar from './NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: ' ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className }>
      <NavBar></NavBar>
        {children}
        
        </body>
    </html>
  )
}
