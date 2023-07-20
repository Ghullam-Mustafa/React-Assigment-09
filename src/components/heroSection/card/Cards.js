import React from 'react'
import  '../../heroSection/card/Card.css'

export default function Cards(props) {
  return (
    <div >
        <h5 className='total'>{props.total}k+</h5>
        <p className='text-white titl'>{props.title}</p>
    </div>
  )
}
