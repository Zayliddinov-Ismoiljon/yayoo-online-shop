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
							src='https://cdn.macbro.uz/macbro/c66eb624-cfd1-4cf9-b341-0ab6a84eb96f'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : Kompyuter</h3>
						<span className='maxsulot__fullname'>Company name: HP</span>
						<h4 className='maxsulot__artistname'>Started date: 10.05.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 10.05.2023</span>
						<span className='maxsulot__usingdate'>Using date: 12.07.2025</span>
						<Example name='button' />
					</li>

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='https://uzhackersw.uz/upload/blogs/rasm/Xs.jpg'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : Klaviatura</h3>
						<span className='maxsulot__fullname'>Company name: Lenavo</span>
						<h4 className='maxsulot__artistname'>Started date: 10.10.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 15.10.2023</span>
						<span className='maxsulot__usingdate'>Using date: 12.10.2025</span>
						<Example name='button' />
					</li>

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='https://cdn.goodzone.uz/goodzone/3d514b1e-5375-4002-8af7-fb6b7e002200'
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
							src='https://upload.wikimedia.org/wikipedia/commons/5/5e/Vertex_2_Solid_State_Drive_by_OCZ-top_oblique_PNr%C2%B00307.jpg'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : SSD</h3>
						<span className='maxsulot__fullname'>Company name: Samsung</span>
						<h4 className='maxsulot__artistname'>Started date: 10.10.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 15.10.2023</span>
						<span className='maxsulot__usingdate'>Using date: 12.10.2025</span>
						<Example name='button' />
					</li>

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='https://kattabozor.s3.eu-central-1.amazonaws.com/ri/59d83a45f97a9da69e74eaf2fd0c0bb033480c0ac17aaa7613843353385dd959_sXndqy_640l.jpg'
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
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvQJYVrYhIaF0E3KQziCovRk8TIEWL8AFKCeucHA7c38rBBkhcQkTtwVYupjgyZuAYxg&usqp=CAU'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : HHD</h3>
						<span className='maxsulot__fullname'>Company name: Lenavo</span>
						<h4 className='maxsulot__artistname'>Started date: 25.12.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 17.12.2027</span>
						<span className='maxsulot__usingdate'>Using date: 12.12.2027</span>
						<Example name='button' />
					</li>

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='https://store.az/wp-content/uploads/2019/07/Kuller-Case-1.jpg'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : Kuller</h3>
						<span className='maxsulot__fullname'>Company name: Hitachi</span>
						<h4 className='maxsulot__artistname'>Started date: 10.08.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 15.08.2025</span>
						<span className='maxsulot__usingdate'>Using date: 12.08.2025</span>
						<Example name='button' />
					</li>

					<li className='maxsulot__item'>
						<img
							className='maxsulot__img'
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_vXpHKxd1ic2HZgB10Y3p0cYNaNC5RbYGe6gdYpeICis7cE2x451cVNxEGALZh8k_IUo&usqp=CAU'
							alt='product image'
						/>
						<h3 className='maxsulot__name'>Name : Display</h3>
						<span className='maxsulot__fullname'>Company name: Avalon</span>
						<h4 className='maxsulot__artistname'>Started date: 10.10.2022</h4>
						<span className='maxsulot__guarantee'>Guarentee: 15.10.2023</span>
						<span className='maxsulot__usingdate'>Using date: 12.10.2025</span>
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
