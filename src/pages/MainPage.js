import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/heroSection/HeroSection'
// import TrendingCollection from '../components/trendingCollection/TrendingCollection'


export default function MainPage() {
  return (
    <div >
        <Navbar/>
        <HeroSection/>
        {/* <TrendingCollection/> */}
    </div>
  )
}
