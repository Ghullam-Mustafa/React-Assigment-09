import React from 'react'
import '../trendingCollection/trendingCollectionCss/TrendingCollection.css'
import TrendingCards from './trendingCards/TrendingCards'
import img1 from '../../assets/Primary Photo Placeholder.png'
import img2 from '../../assets/Secondary Photo Placeholder.png'
import img3 from '../../assets/Secondary Photo Placeholder (1).png'

export default function TrendingCollection() {
  return (
    <div className='treningCollection'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className=' h1'>Trending Collection</p>
                    <p  className=' h2'>Checkout our weekly updated trending collection.</p>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row text-center">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <TrendingCards src1={img1} src2={img2} src3={img3} />
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <TrendingCards src1={img1} src2={img2} src3={img3} />
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <TrendingCards src1={img1} src2={img2} src3={img3} />
                </div>
            </div>
        </div>
    </div>
  )
}
