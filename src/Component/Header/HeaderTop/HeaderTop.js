import React from 'react';
import Logo from '../../../Assets/Images/Logo.png';
import BurgerBtn from './BurgerBtn';
import './HeaderTop.css';

export default function HeaderTop() {
	return (
		<>
			<div className='header'>
				<a href='./'>
					<img className='logo' src={Logo} alt='site logo' />
				</a>
				<div className='header__about'>
					<ul className='header__list'>
						<li className='header__item'>
							<a href='#' className='header__itemlink'>
								Bosh sahifa
							</a>
						</li>
						<li className='header__item'>
							<a href='#' className='header__itemlink'>
								Xizmatlar
							</a>
						</li>
						<li className='header__item'>
							<a href='#' className='header__itemlink'>
								Mahsulotlar
							</a>
						</li>
					</ul>
					<form action='' className='form' autoComplete='off'>
						<input
							type='search'
							placeholder='Search ... '
							className='form-control'
						/>
					</form>
					<button type='button' className='header__btn'>
                        <BurgerBtn/>	
                        <span className='burgerBtn-span'></span>
                        <span className='burgerBtn-span'></span>
                        <span className='burgerBtn-span'></span>
					</button>
				</div>
			</div>
		</>
	);
}
