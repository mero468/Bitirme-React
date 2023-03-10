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
                                                        <h1 className="detail-top-title"> G??khan T??rkmen Konseri </h1>
                                                    </div>
                                                <div className="mt-2 detail-top-left-content">
                                                    <ul>
                                                        <Tags/>
                                                        <Tags/>
                                                    </ul>
                                                </div>
                                                <div className="detail-event-summary">
                                                    <div className={"event-summary-content scroll-dark "+active}>
                                                        <h2>Etkinlik Detay??</h2>
                                                        <p>
                                                            <p>
                                                                <span>Yaz aylar??n??n unutulmaz g??nlerini ge??irdi??imiz ve alan??nda en iyi sanat????larla birlikte ??ark??lar??n?? s??yleyip dans etti??imiz ??anakkale M??zik Festivali'nde 2023 y??l??nda tekrardan bulu??mak i??in sab??rs??zlan??yoruz!
                                                                </span>
                                                            </p>
                                                            <p><span>Detaylar, sanat????lar ve s??rprizler i??in takipte kal!</span></p>
                                                            <p><strong><span>Sanat????lar:</span></strong></p>
                                                            <p><strong><span>Can Ozan</span></strong></p>
                                                            <p><strong><span>Hayko Cepkin</span></strong></p>
                                                            <p><strong><span>Madrigal</span></strong></p>
                                                            <p><strong><span>Mavi Gri</span></strong></p>
                                                            <p><strong><span>Patron</span></strong></p>
                                                            <p><strong><span>Sagopa Kajmer</span></strong></p>
                                                            <p><strong><span>??ekersiz</span></strong></p>
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
                                                <h3 className="box-header-title">Bilet Sat??n Al</h3>
                                                <div className="box-header-title-right">
                                                    Tarih Se??iniz
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
                                                <h3 className="box-header-title">Sanat????lar</h3>
                                            </div>
                                            <div className="detail-artist">
                                                <div className="artist ng-star-inserted">
                                                    <div className="artist-image">
                                                        <img alt="G??khan T??rkmen" src="https://cdn.bubilet.com.tr/files/Sanatci/gokhan-turkmen-31857.jpg" className="ng-star-inserted"/>
                                                    </div>
                                                    <div className="artist-body">
                                                        <a title="G??khan T??rkmen" href="/sanatci/gokhan-turkmen">G??khan T??rkmen</a>
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