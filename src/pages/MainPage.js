import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/heroSection/HeroSection'


export default function MainPage() {
  return (
    <div >
        <Navbar/>
        <HeroSection/>
    </div>
  )
}
