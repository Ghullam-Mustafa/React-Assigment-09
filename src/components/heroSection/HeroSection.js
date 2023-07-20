import React from 'react'
import '../../components/heroSection/HeroSection.css'
import ButtonOne from '../../components/buttonOne/ButtonOne'
import img from '../../assets/Image Placeholder.png'
import img2 from '../../assets/Artist Card.png'
import Cards from './card/Cards'

export default function HeroSection() {
    return (
        <div className='heroSection'>
            <div className="container ">
                <div className="row o">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className='p1'>Discover digital art & Collect NFTs</p>
                        <p className='p2'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                        <ButtonOne />
                        <div className="row pt-3 d-flex">
                            <div className="col-lg-4 col-sm-4 col-md-4">
                                <Cards total="240" title="Total Sale" />
                            </div>
                            <div className="col-lg-4 col-sm-4 col-md-4">
                                <Cards total="100" title="Actions" />
                            </div>
                            <div className="col-lg-4 col-sm-4 col-md-4">
                                <Cards total="240" title="Artists" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="">
                            <div class="card" >
                                <img src={img} class="card-img-top" alt="..."/>
                                    <div class="card-body ">
                                        <h5 className='text-white'>Space Walking</h5>
                                        <div>
                                            <img src={img2} className='img-fluid ' alt="" />
                                            
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
