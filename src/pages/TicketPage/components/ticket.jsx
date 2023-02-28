import React from 'react'

function Ticket() {
  return (
    <div class="seances-area mb-4">
        <div class="seance ">
            <div class="seance-left ">
                <div class="seance-date">01 Mart Çar / 21:30</div>
                <div class="seance-place">IF Performance Hall Beşiktaş</div>
                <div class="seance-place"> Çift Kişilik Bilet Avantjaıyla </div>
                <div  class="seance-seat active single-seance">
                    <em > 
                        <i class="fas fa-couch"></i>
                        <i class="check fas fa-check"></i>
                    </em>
                    <span >KOLTUK SEÇMELİ</span>

                </div>
            </div>
            <div class="seance-right">
                <div class="seance-price">
                    <span>350 .
                        <em>00 TL</em>
                    </span>
                    <p> Başlayan Fiyatlar </p>
                </div>
            </div>
            <div class="seance-bottom">
            <div  class="total-ticket ng-star-inserted"><span >KALAN BİLET</span><b >8</b></div>

                <a class="buy-button" href="/istanbul/etkinlik/evgeny-grinko-konseri/seans/13853">
                        <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                <g clip-path="url('/istanbul/etkinlik/evgeny-grinko-konseri#clip0_108_48')">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.383 4.99998L6.93 0.756981L6.07 0.242981L3.217 4.99998H0.703C0.516553 4.99998 0.337742 5.07405 0.205904 5.20589C0.0740659 5.33772 0 5.51653 0 5.70298L0 6.14198C0 9.08598 0.685 11.989 2.002 14.622C2.05893 14.7355 2.14632 14.831 2.25439 14.8978C2.36247 14.9645 2.48697 14.9999 2.614 15H12.386C12.646 15 12.882 14.854 12.998 14.621C14.3146 11.9881 15 9.08474 15 6.14098V5.70298C15 5.51653 14.9259 5.33772 14.7941 5.20589C14.6623 5.07405 14.4834 4.99998 14.297 4.99998H11.783L8.93 0.242981L8.07 0.756981L10.617 4.99998H4.383ZM5 9.99998H10V8.99998H5V9.99998Z" fill="currentColor"></path>
                </g>
                <defs>
                <clipPath id="clip0_108_48">
                    <rect width="15" height="15" fill="white"></rect>
                </clipPath>
                </defs>
            </svg><span>SATIN AL</span></a>
            </div>
        </div>
    </div>
  )
}


export default Ticket;
