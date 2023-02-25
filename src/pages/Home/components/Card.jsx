import React from 'react'
import "./card.css"
const Card = () => {
  return (
        <div class='p-0 mb-5 card translate-grow col-md-6 col-sm-12'>
            <div class='card-img'>
                {/* <button class='label'>NEW</button>
                <button class='save'>
                <span class="material-symbols-outlined">
                    bookmark
                </span>
                </button> */}
            </div>
            <div class='card-desc'>
                <span class='card-desc-first'>
                    <strong style={{fontWeight:"bolder", fontSize:"14pt"}}>Gulsen Concert</strong>
                    <p className='price m-0'> <i class="fas fa-map-marked fa-xs iconthing"></i> fIzmir Arena</p>
                    <hr className='m-0'/>

                    <p className='price'> <i class="fas fa-calendar fa-xs me-2 "></i>25.01.2023</p>


                </span>
                <span class='card-desc-last event-price container-fluid'>
                    <p className='my-2 me-5 float-sm-start'>  <strong  style={{fontSize:"20pt"}}>329.</strong>00</p>
                    <button className='ms-5 basket-btn my-2'> <i class="fas fa-shopping-cart fa-sm  "></i></button>
                </span>
            </div>
        </div>
    )
}

export default Card