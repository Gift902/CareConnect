import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Specialists from '../components/Specialists'
import TrustBar from '../components/TrustBar'
import WhyChooseUs from '../components/TrustBar'
const Home = () => {
  return (
     <div className="font-sans text-gray-800">
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Specialists />
      <WhyChooseUs />
      <Footer />
    </div>
  )
}
export default Home
