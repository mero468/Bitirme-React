import React, { useState } from 'react';
import "./ticketpage.css";
import Breadcrumb from './components/breadcrumb';
import Tags from './components/tags';
import { NavBar } from '../../common/NavBar';
function TicketPage() {

  const [active,setActive] = useState("");
  return (
        <>
            <NavBar/>
            <div id="event-page" class="mt-5 contents-area">
                <div class="container">
                    <Breadcrumb/>
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
                                                        <Tags/>
                                                    </ul>
                                                </div>
                                                <div class="detail-event-summary">
                                                    <div className={"event-summary-content scroll-dark "+active}>
                                                        <h2>Etkinlik Detayı</h2>
                                                        <p>
                                                            <p>
                                                                <span>Yaz aylarının unutulmaz günlerini geçirdiğimiz ve alanında en iyi sanatçılarla birlikte şarkılarını söyleyip dans ettiğimiz Çanakkale Müzik Festivali'nde 2023 yılında tekrardan buluşmak için sabırsızlanıyoruz!
                                                                </span>
                                                            </p>
                                                            <p><span>Detaylar, sanatçılar ve sürprizler için takipte kal!</span></p>
                                                            <p><strong><span>Sanatçılar:</span></strong></p>
                                                            <p><strong><span>Can Ozan</span></strong></p>
                                                            <p><strong><span>Hayko Cepkin</span></strong></p>
                                                            <p><strong><span>Madrigal</span></strong></p>
                                                            <p><strong><span>Mavi Gri</span></strong></p>
                                                            <p><strong><span>Patron</span></strong></p>
                                                            <p><strong><span>Sagopa Kajmer</span></strong></p>
                                                            <p><strong><span>Şekersiz</span></strong></p>
                                                        </p>
                                                    </div>
                                                    <button onClick={()=>{
                                                        active =="active" ?
                                                        setActive(""):
                                                        setActive("active")
                                                        }} aria-label="Read More Of Summary" class="summary-read-more show"></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-12 col-xl-7">
                                        <div id="seanslar" class="cont-box ">
                                            <div class="box-header">
                                                <h3 class="box-header-title">Bilet Satın Al</h3>
                                                <div class="box-header-title-right">
                                                    Tarih Seçiniz
                                                </div>
                                            </div>
                                        <div class="seances-area">
                                                <div _ngcontent-serverapp-c69="" class="ng-star-inserted">
                                                    <div _ngcontent-serverapp-c69="" class="ng-star-inserted">
                                                        <div _ngcontent-serverapp-c69="" class="seance ng-star-inserted">
                                                            <div _ngcontent-serverapp-c69="" class="seance-left ng-star-inserted">
                                                                <div _ngcontent-serverapp-c69="" class="seance-date">01 Mart Çar / 21:30</div>
                                                                <div _ngcontent-serverapp-c69="" class="seance-place">IF Performance Hall Beşiktaş</div>
                                                                <div _ngcontent-serverapp-c69="" class="seance-place ng-star-inserted"> * Dayanışma Etkinliği * </div>
                                                                <div _ngcontent-serverapp-c69="" class="seance-seat active single-seance standing">
                                                                    <em _ngcontent-serverapp-c69=""></em>
                                                                    <span _ngcontent-serverapp-c69="">AYAKTA DÜZEN</span>
                                                                    <div _ngcontent-serverapp-c69="" class="help-event ng-star-inserted">
                                                                        <div _ngcontent-serverapp-c69="" class="help-event-icon">
                                                                        </div>
                                                                        <div _ngcontent-serverapp-c69="" class="help-event-text">DAYANIŞMA</div>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TicketPage