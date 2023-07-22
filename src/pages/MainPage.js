import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/heroSection/HeroSection'
import TrendingCollection from '../components/trendingCollection/TrendingCollection'
import TopCreater from '../components/topCreater/TopCreater'



export default function MainPage() {
  return (
    <div >
        <Navbar/>
        <HeroSection/>
        <TrendingCollection/>
        <TopCreater/>
    </div>
  )
}
