import React from 'react';
import '../styles.css';
import Logo  from "../../assets/images/nft-logo.png"
export default function LoggedNav() {
  return (
    <div>
        <div  className="header-profile me-3">
            <a  routerlink="/profil" title="Profil" href="/profil">Hoşgeldin amar atoum</a>
            <div  className="ms-2 profile-img">
                <img  src={Logo} alt="Profil"/>
                <em ></em>
            </div>
        </div>
    </div>
  )
}
