import React from 'react'
import '../subscribe/Subscribe.css'
import img from '../../assets/Photo.png'
import SubscribeBtn from './subscribeBtn/SubscribeBtn'

export default function Subscribe() {
  return (
    <div className='subscribe'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col-lg-6 p-5">
                            <img src={img} alt="" />
                        </div>
                        <div className="col-lg-6 p-5">
                            <h3 className='text-white display-4 fw-bolder'>Join our weekly digest</h3>
                            <h6 className='text-white '>Get exclusive promotions & updates straight to your inbox.</h6>
                            <SubscribeBtn/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
