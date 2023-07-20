import React from 'react'
import img from '../../assets/User.png'
import '../button/Button.css'

export default function Button() {
  return (
    <div>
        <button type="button" class="btn  "> <img src={img} className='img' alt="" /><span className='m-2 text'>Sign Up</span> </button>
    </div>
  )
}
