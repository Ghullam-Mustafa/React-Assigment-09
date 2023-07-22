import React from 'react'
import img from '../../assets/User.png'
import './NavButton.css'

export default function Button() {
  return (
    <div>
        <button type="button" class="btn button  "> <img src={img} className='img' alt="" /><span className='m-2 text'>Sign Up</span> </button>
    </div>
  )
}
