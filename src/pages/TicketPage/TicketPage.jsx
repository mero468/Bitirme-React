import React, { useState } from 'react';
import "./ticketpage.css";
import Breadcrumb from './components/breadcrumb';
import Tags from './components/tags';
import { NavBar } from '../../common/NavBar';
import Ticket from './components/ticket';
function TicketPage() {
  const currentpage = "home";
  const [active,setActive] = useState("");
  return (
        <>
            <NavBar currentpage={currentpage}/>
            <div id="event-page" className="mt-5 contents-area">
                <div className="container">
                    <Breadcrumb/>
                    <div className='detail'>
                        <div className="row">
                            <div id="gallery" className="col-md-4 col-lg-3" style={{marginBottom: -10 ,zIndex:0}}>
                                <div className="lightGallery">
                                    <div className="poster " data-src="https://cdn.bubilet.com.tr/files/Etkinlik/cem-adrian-konseri-40087.jpg" data-lg-id="4ed766e4-ed8d-43be-a045-e4e6b52f8a21">
                                        <img alt="Cem Adrian Konseri" src="https://cdn.bubilet.com.tr/files/Etkinlik/cem-adrian-konseri-40087.jpg" className=""/>            
                                        <span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 col-lg-9 " style={{zIndex:1}}>
                                <div className='row'>
                                    {/* Information */}
                                    <div className='col-12'>
                                        <div className='cont-box detail-top-box'>
                                            <div className="detail-top-area">
                                                <div className="detail-top-area-left">
                                                    <div className="detail-top-title-wrapper">
                                                        <h1 className="detail-top-title"> Gökhan Türkmen Konseri </h1>
                                                    </div>
                                                <div className="mt-2 detail-top-left-content">
                                                    <ul>
                                                        <Tags/>
                                                        <Tags/>
                                                    </ul>
                                                </div>
                                                <div className="detail-event-summary">
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
                                                        }} aria-label="Read More Of Summary" className="summary-read-more show"></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/* Tickets */}
                                    <div className="col-12 col-xl-7">
                                        <div id="seanslar" className="cont-box ">
                                            <div className="box-header">
                                                <h3 className="box-header-title">Bilet Satın Al</h3>
                                                <div className="box-header-title-right">
                                                    Tarih Seçiniz
                                                </div>
                                            </div>
                                            <Ticket/>
                                            <Ticket/>
                                            <Ticket/>
                                            <Ticket/>
                                            <Ticket/>


                                        </div>
                                    </div>
                                    
                                    {/* Artists */}
                                    <div className="col-lg-12 col-xl-5 ng-star-inserted">
                                        <div id="oyuncular" className="cont-box">
                                            <div className="box-header">
                                                <h3 className="box-header-title">Sanatçılar</h3>
                                            </div>
                                            <div className="detail-artist">
                                                <div className="artist ng-star-inserted">
                                                    <div className="artist-image">
                                                        <img alt="Gökhan Türkmen" src="https://cdn.bubilet.com.tr/files/Sanatci/gokhan-turkmen-31857.jpg" className="ng-star-inserted"/>
                                                    </div>
                                                    <div className="artist-body">
                                                        <a title="Gökhan Türkmen" href="/sanatci/gokhan-turkmen">Gökhan Türkmen</a>
                                                        <span className="ng-star-inserted"><em>2</em><b>Etkinlik</b>
                                                        </span>
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