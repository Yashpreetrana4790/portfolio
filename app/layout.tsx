import type { Metadata } from 'next'
import { Great_Vibes, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const greatVibesFont = Great_Vibes({
  variable: '--font-greatvibes',
  weight: ['400'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Yashpreet Rana portfolio',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${greatVibesFont.variable}`}>
      <Navbar />
      <main>
        <section>{children}</section>
      </main>
      <Footer />

    </html>
  )
}
