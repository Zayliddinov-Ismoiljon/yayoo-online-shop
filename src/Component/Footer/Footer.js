import React from 'react';
import Logo from "../../Assets/Images/Logo.png"
import "./Footer.css"

export default function Footer() {
  return (
    <>
    <div className='footer'>
        <div className="footer__about">
            <a href="./">
                <img src={Logo} alt="site logo" className="logo" />
            </a>
            <span className="footer__abouttext">
                Funding freemium long tail hypotheses first mover advantage assets ownership
            </span>
            <a href="mailto:zayliddinovismoiljon@gmail.com" target="_blank" className="footer__emaillink">
                javohkir@gmail.com
            </a>
            <a href="tel:+998977777777" className="footer__tellink">+998977777777</a>
        </div>
        <div className="footer__service">
            <h3 className="footer__title">
                Services
            </h3>
            <ul className="footer__list">
                <li className="footer__item">
                    <a href="#" className="footer__itemlink">
                    Web Hosting
                    </a>
                </li>
                <li className="footer__item">
                    <a href="#" className="footer__itemlink">
                    Domains
                    </a>
                </li>
                <li className="footer__item">
                    <a href="#" className="footer__itemlink">
                    Premium Hosting
                    </a>
                </li>
                <li className="footer__item">
                    <a href="#" className="footer__itemlink">
                    Private Server
                    </a>
                </li>
                <li className="footer__item">
                    <a href="#" className="footer__itemlink">
                    E-mail Hosting
                    </a>
                </li>
            </ul>
        </div>
        <div className="footer__service">
            <h3 className="footer__title">
                Support
            </h3>
            <ul className="footer__list">
                <li className="footer__item">
                    <a href="#" className="footer__itemlink">
                    Pricing Plan
                    </a>
                </li>
                <li className="footer__item">
                    <a href="#" className="footer__itemlink">
                    Documentation
                    </a>
                </li>
                <li className="footer__item">
                    <a href="#" className="footer__itemlink">
                    Guide
                    </a>
                </li>
                <li className="footer__item">
                    <a href="#" className="footer__itemlink">
                    Tutorial
                    </a>
                </li>
            </ul>
        </div>
        <div className="footer__service">
            <h3 className="footer__title">
            Company
            </h3>
            <ul className="footer__list">
                <li className="footer__item">
                    <a href="#" className="footer__itemlink">
                    About
                    </a>
                </li>
                <li className="footer__item">
                    <a href="#" className="footer__itemlink">
                    Blog
                    </a>
                </li>
                <li className="footer__item">
                    <a href="#" className="footer__itemlink">
                    Join Us
                    </a>
                </li>
                <li className="footer__item">
                    <a href="#" className="footer__itemlink">
                    Press
                    </a>
                </li>
                <li className="footer__item">
                    <a href="#" className="footer__itemlink">
                    Partners
                    </a>
                </li>
            </ul>
        </div>
        <div className="footer__service">
            <h3 className="footer__title">
            Legal
            </h3>
            <ul className="footer__list">
                <li className="footer__item">
                    <a href="#" className="footer__itemlink">
                    Claim
                    </a>
                </li>
                <li className="footer__item">
                    <a href="#" className="footer__itemlink">
                    Privacy
                    </a>
                </li>
                <li className="footer__item">
                    <a href="#" className="footer__itemlink">
                    Terms
                    </a>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}
