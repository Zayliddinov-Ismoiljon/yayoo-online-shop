import React from 'react';
import Fridge from "../../Assets/Images/Fridge.png"
import iMac from "../../Assets/Images/iMac.png"
import Armchair from "../../Assets/Images/Armchair.png"
import FanHead from "../../Assets/Images/FanHead.png"
import Lamp from "../../Assets/Images/Lamp.png"
import Wok from "../../Assets/Images/Wok.png"
import MeatGrinder from "../../Assets/Images/MeatGrinder.png"
import "./Main.css"
import Maxsulot from './Maxsulot/Maxsulot';

export default function Main() {
  return (
    <>
        <>
            <div className="main">
                <p className="main__text">
                Online marketplaces are information technology companies that act as intermediaries by connecting buyers and sellers. Examples of prevalent online marketplaces for retailing consumer goods and services are Amazon, Taobao and eBay. On the website of the online marketplace sellers can publish their product offering with a price and information 
                </p>
                <div className="main__about">
                    <ul className="main__list">
                        <li className="main__item">
                            <img src={Fridge} alt="main section image" className="main__img" />
                        </li>
                        <li className="main__item">
                            <img src={iMac} alt="main section image" className="main__img" />
                        </li>
                        <li className="main__item">
                            <img src={Armchair} alt="main section image" className="main__img" />
                        </li>
                        <li className="main__item">
                            <img src={FanHead} alt="main section image" className="main__img" />
                        </li>
                        <li className="main__item">
                            <img src={Lamp} alt="main section image" className="main__img" />
                        </li>
                        <li className="main__item">
                            <img src={Wok} alt="main section image" className="main__img" />
                        </li>
                        <li className="main__item">
                            <img src={MeatGrinder} alt="main section image" className="main__img" />
                        </li>
                    </ul>
                </div>
                <Maxsulot />
            </div>
        </>
    </>
  )
}
