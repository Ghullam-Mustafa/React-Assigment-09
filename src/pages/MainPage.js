import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/heroSection/HeroSection'
import TrendingCollection from '../components/trendingCollection/TrendingCollection'
import TopCreater from '../components/topCreater/TopCreater'
import BrowsCategories from '../components/browsCategories/BrowsCategories'
import DiscoverMore from '../components/discoverMore/DiscoverMore'
import FluidImg from '../components/fluidImg/FluidImg'




export default function MainPage() {
  return (
    <div >
        <Navbar/>
        <HeroSection/>
        <TrendingCollection/>
        <TopCreater/>
        <BrowsCategories/>
        <DiscoverMore/>
        <FluidImg/>
    </div>
  )
}
