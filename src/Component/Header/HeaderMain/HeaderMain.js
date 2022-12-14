import React from 'react'
import Komp from '../../../Assets/Images/komp.png'
import Logo from "../../../Assets/Images/Logo.png"

import "./HeaderMain.css"

export default function HeaderMain() {
  return (
    <div className='header-main'>
        <img src={Komp} alt="kirmashina images" className='header-main__img' />
        <div className="header-main__info">
            <div className="header-main__about">
            <img src={Logo} alt="logo images" className="header-main__logo" />
            </div>
            <span className="header-main__span">
                Online market
            </span>
            <button className="header-main__zakas">
                Buyurtma
            </button>
        </div>
    </div>
  )
}
