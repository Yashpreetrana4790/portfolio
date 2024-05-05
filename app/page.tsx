import Aboutme from '@/components/Aboutme'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Letconnect from '@/components/Letconnect'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />
      <Aboutme />
      <Letconnect />
    </div>
  )
}

export default page