import React, { useEffect, useState } from 'react';
import './Maxsulot.css';
import Example from './Modal';

export default function Maxsulot() {
	const [maxsulot, setMaxsulot] = useState([]);

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`https://technomart-portfolio.herokuapp.com/product/all`, options)
			.then((response) => response.json())
			.then((data) => setMaxsulot(data));
	}, []);

	console.log('maxsulot', maxsulot);

	return (
		<>
			<div className='maxsulot'>
				<ul className='maxsulot__list'>
					{/* {
                  maxsulot.slice(0,30).map((e,i) => (
                    <li className='maxsulot__item' key={i}>
                      <img className='maxsulot__img' src={e.img} alt="product image" />
                      <h3 className='maxsulot__name'>Name : {e.label}</h3>
                      <span className='maxsulot__fullname'>Company name: {e.company_name}</span>
                      <h4 className='maxsulot__artistname'>Started date: {e.started_date}</h4>
                      <span className="maxsulot__guarantee">Guarentee: {e.guarantee}</span>
                      <span className="maxsulot__usingdate">Using date: {e.using_date}</span>
                      <Example name={e.label}/>
                    </li>
                  ))
                } */}

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='https://istudio-cheb.ru/a/istudio/files/96748/subimg96748.png'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : Iphone</h3>
						<span className='maxsulot__fullname'>Company name: Apple</span>
						<h4 className='maxsulot__artistname'>Started date: 10.03.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 15.05.2023</span>
						<span className='maxsulot__usingdate'>Using date: 12.25.2025</span>
						<Example name='button' />
					</li>

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='http://techshop.uz/uploads/catalog/1043776-91aed70887.jpg'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : Dazmol</h3>
						<span className='maxsulot__fullname'>Company name: iTech</span>
						<h4 className='maxsulot__artistname'>Started date: 10.05.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 10.05.2023</span>
						<span className='maxsulot__usingdate'>Using date: 12.07.2025</span>
						<Example name='button' />
					</li>

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='https://kattabozor.s3.eu-central-1.amazonaws.com/ri/b7ec46843999cc0d49f95d631961a3dfaceda813bf93277cd4b49734e5e4fb75_xTXOp2_480l.jpg'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : Soch quritgich</h3>
						<span className='maxsulot__fullname'>Company name: Artel</span>
						<h4 className='maxsulot__artistname'>Started date: 10.10.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 15.10.2023</span>
						<span className='maxsulot__usingdate'>Using date: 12.10.2025</span>
						<Example name='button' />
					</li>

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='https://ict.xabar.uz/static/crop/1/9/920__95_1957532938.png'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : Sichqoncha</h3>
						<span className='maxsulot__fullname'>Company name: Acer</span>
						<h4 className='maxsulot__artistname'>Started date: 27.03.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 27.05.2023</span>
						<span className='maxsulot__usingdate'>Using date: 12.25.2025</span>
						<Example name='button' />
					</li>

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='https://static.sello.uz/unsafe/x600/https://static.sello.uz/fm/20220301/f90e4c89-e703-4af1-ba8a-b7533a8a252b.png'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : Muzlatgich</h3>
						<span className='maxsulot__fullname'>Company name: Samsung</span>
						<h4 className='maxsulot__artistname'>Started date: 10.10.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 15.10.2023</span>
						<span className='maxsulot__usingdate'>Using date: 12.10.2025</span>
						<Example name='button' />
					</li>

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='https://kattabozor.s3.eu-central-1.amazonaws.com/ri/a7cc96efc1d3c4b114e5bc1663bb31e294d55aa644c1b4497582f20f2f234251_eJ4xoD_640l.jpg'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : Telvizor</h3>
						<span className='maxsulot__fullname'>Company name: Artel</span>
						<h4 className='maxsulot__artistname'>Started date: 10.09.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 15.09.2023</span>
						<span className='maxsulot__usingdate'>Using date: 25.09.2025</span>
						<Example name='button' />
					</li>

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='https://files.glotr.uz/company/000/001/428/products/2013/11/08/13839102303846-66651132c65f6972b03136c1ea389b36.jpg?_=ozbol'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : Kompyuter</h3>
						<span className='maxsulot__fullname'>Company name: HP</span>
						<h4 className='maxsulot__artistname'>Started date: 10.12.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 15.05.2026</span>
						<span className='maxsulot__usingdate'>Using date: 12.25.2026</span>
						<Example name='button' />
					</li>

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='https://bosch-uzbekistan.uz/thumb/2/OIWQUNff5U7zh0Yz3a9ddg/3520r2350/d/mcsa03008251_bo_t_11_bwd41_aquawash_clean_bwd421pet_powerimage_def.jpg'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : Changyutgich</h3>
						<span className='maxsulot__fullname'>Company name: Artel</span>
						<h4 className='maxsulot__artistname'>Started date: 25.12.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 17.12.2027</span>
						<span className='maxsulot__usingdate'>Using date: 12.12.2027</span>
						<Example name='button' />
					</li>

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='https://krasnodar.santeh.guru/images/detailed/470/Lomo_Inverter_Arctic_3_7rhg-td_ojxl-wr_en1s-nd.jpg'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : Konditsioner</h3>
						<span className='maxsulot__fullname'>Company name: Hitachi</span>
						<h4 className='maxsulot__artistname'>Started date: 10.08.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 15.08.2025</span>
						<span className='maxsulot__usingdate'>Using date: 12.08.2025</span>
						<Example name='button' />
					</li>

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='https://kattabozor.s3.eu-central-1.amazonaws.com/ri/8e048006e719fee1b8e9bab5f3b02a16d0e3bb2d44f8e1f9134225d9fca9cbcd_SvpDMf_640l.jpg'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : Kir mashina</h3>
						<span className='maxsulot__fullname'>Company name: Avalon</span>
						<h4 className='maxsulot__artistname'>Started date: 10.10.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 15.10.2023</span>
						<span className='maxsulot__usingdate'>Using date: 12.10.2025</span>
						<Example name='button' />
					</li>

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='https://www.mediapark.uz/upload/file/mp/products/myasorubki/ART-MG-35.jpg'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : Go'sht maydalagich</h3>
						<span className='maxsulot__fullname'>Company name: Artel</span>
						<h4 className='maxsulot__artistname'>Started date: 10.12.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 15.12.2023</span>
						<span className='maxsulot__usingdate'>Using date: 12.12.2025</span>
						<Example name='button' />
					</li>

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='https://www.mediapark.uz/upload/file/mp/products/images/6RqBxNKUtmFw1p9QULoxw8KExmwHlO5U.jpg'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : Mikravalnovka</h3>
						<span className='maxsulot__fullname'>Company name: Artel</span>
						<h4 className='maxsulot__artistname'>Started date: 27.09.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 30.08.2023</span>
						<span className='maxsulot__usingdate'>Using date: 14.11.2025</span>
						<Example name='iPhone' />
					</li>

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='https://tovar.uz/images/company/1281/tovar/16827/o_5f93e9935eb55.jpg'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : Blender</h3>
						<span className='maxsulot__fullname'>Company name: Hofman</span>
						<h4 className='maxsulot__artistname'>Started date: 31.05.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 15.10.2023</span>
						<span className='maxsulot__usingdate'>Using date: 12.07.2025</span>
						<Example name='button' />
					</li>

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='https://images.uzum.uz/cdn0b4ol08kcldtnm2lg/original.jpg'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : Ko'pirtirgich</h3>
						<span className='maxsulot__fullname'>Company name: Artel</span>
						<h4 className='maxsulot__artistname'>Started date: 27.05.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 15.07.2023</span>
						<span className='maxsulot__usingdate'>Using date: 12.11.2025</span>
						<Example name='button' />
					</li>

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='https://cdn.goodzone.uz/goodzone/fb472330-1004-49ab-a7d7-460240c628df'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : Tefal</h3>
						<span className='maxsulot__fullname'>Company name: iTech</span>
						<h4 className='maxsulot__artistname'>Started date: 10.08.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 18.11.2023</span>
						<span className='maxsulot__usingdate'>Using date: 12.09.2025</span>
						<Example name='button' />
					</li>
				</ul>
				<p className='maxsulot__text'>
					Online marketplaces are information technology companies that act as
					intermediaries by connecting buyers and sellers. Examples of prevalent
					online marketplaces for retailing consumer goods and services are
					Amazon, Taobao and eBay. On the website of the online marketplace
					sellers can publish their product offering with a price and
					information
				</p>
			</div>
		</>
	);
}
