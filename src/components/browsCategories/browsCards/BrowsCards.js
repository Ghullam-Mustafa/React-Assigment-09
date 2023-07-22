import React from 'react'
import '../browsCards/BrowsCards.css'

export default function BrowsCards(props) {
    return (
        
            <div className=" rounded-5 border-0 bg-transparent">

                <div className=" ">

                    {/* <img src={props.src} alt="" className='img-fluid'/>
                
                <div className="p-3 clr">
                <h4 className='card-subtitle mb-2 text-white'>{props.name} </h4> */}
                    {/* </div> */}
                    <div class="card bg-transparent border-0" style={{width: '16rem'}}>
                        <img src={props.src} class="card-img-top" className='img-fluid' alt="..."/>
                            <div class="card-body">
                                <h4 class="card-text text-white px-4">{props.name}</h4>
                            </div>
                    </div>
                </div>
            </div>
        
    )
}
