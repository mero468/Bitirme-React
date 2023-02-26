import React from 'react';
import "./ticketpage.css";
import Tags from './components/tags';
function TicketPage() {
  return (
        <>
            
            <div id="event-page" class="contents-area">
                <div class="container">
                    <div aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="fas fa-home fa-sm  "></i></a></li>
                            <li class="breadcrumb-item"><a href="#">Etkinlik</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Cem Adrian Konseri</li>
                        </ol>
                    </div> 
                    <div className='detail'>
                        <div class="row">
                            <div id="gallery" class="col-md-4 col-lg-3" style={{marginBottom: -10 ,zIndex:0}}>
                                <div class="lightGallery">
                                    <div class="poster ng-star-inserted" data-src="https://cdn.bubilet.com.tr/files/Etkinlik/cem-adrian-konseri-40087.jpg" data-lg-id="4ed766e4-ed8d-43be-a045-e4e6b52f8a21">
                                        <img alt="Cem Adrian Konseri" src="https://cdn.bubilet.com.tr/files/Etkinlik/cem-adrian-konseri-40087.jpg" class="ng-star-inserted"/>            
                                        <span>
                                            
                                        </span>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8 col-lg-9 " style={{zIndex:1}}>
                                    <div className='row'>
                                            <div className='col-12'>
                                                <div className='cont-box detail-top-box'>
                                                    <div class="detail-top-area">
                                                        <div class="detail-top-area-left">
                                                            <div class="detail-top-title-wrapper">
                                                                <h1 class="detail-top-title"> Gökhan Türkmen Konseri </h1>
                                                            </div>
                                                        <div class="mt-2 detail-top-left-content">
                                                            <ul>
                                                                <Tags/>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TicketPage