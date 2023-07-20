import React from 'react'
import '../navbar/navbar.css'
import logo from '../../assets/logo.png'
import Button from '../button/Button'
import hamburger from '../../assets/Burger Menu.png'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="one">
        <img src={logo} className='img-fluid mx-auto' alt="" />
      </div>
      <div className="two">
          <div className="p none text-white">Marketplace</div>
          <div className="p none text-white">Rankings</div>
          <div className="p none text-white">Connect a wallet</div>
          <div className="none"><Button /></div>
          <img src={hamburger} alt="" className='hamburger' />
      </div>
    </div>
  )
}