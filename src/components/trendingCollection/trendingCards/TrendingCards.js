import React from 'react'
import '../trendingCards/cardCss/Card.css'

export default function TrendingCards(props) {
  return (
    <div className='card m-2 '>
        <img src={props.src1} className='img-fluid ' alt="" />
        <div className='a'>
            <div><img src={props.src2} className='img-fluid' alt="" /></div>
            <div><img src={props.src3} className='img-fluid' alt="" /></div>
            <div className='three '>1025+</div>
        </div>
    </div>
  )
}
