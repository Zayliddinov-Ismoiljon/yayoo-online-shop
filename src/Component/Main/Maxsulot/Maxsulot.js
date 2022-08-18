import React, { useEffect, useState } from 'react';
import "./Maxsulot.css"
import Example from './Modal';




export default function Maxsulot() {

  const [maxsulot, setMaxsulot]=useState([])

  useEffect(() => {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ffc3bab311msh6389c04e756abbfp194f59jsnde2940d426b8',
        'X-RapidAPI-Host': 'genius.p.rapidapi.com'
      }
    };

    fetch(
      `https://genius.p.rapidapi.com/artists/16775/songs?page=1&per_page=50`, options
    )
      .then((response) => response.json())
      .then((data) => setMaxsulot(data.response.songs));
  }, []);


  return (
    <>
        <div className="maxsulot">
            <ul className="maxsulot__list">
                {
                  maxsulot.slice(0,20).map((e,i) => (
                    <li className='maxsulot__item' key={i}>
                      <img className='maxsulot__img' src={e.header_image_url} alt="product image" />
                      <h3 className='maxsulot__name'>{e.title}</h3>
                      <span className='maxsulot__fullname'>{e.title_with_featured}</span>
                      <h4 className='maxsulot__artistname'>{e.primary_artist.name}</h4>
                      <Example name={e.title}/>
                    </li>
                  ))
                }
            </ul>
            <p className="maxsulot__text">
            Online marketplaces are information technology companies that act as intermediaries by connecting buyers and sellers. Examples of prevalent online marketplaces for retailing consumer goods and services are Amazon, Taobao and eBay. On the website of the online marketplace sellers can publish their product offering with a price and information 
            </p>
        </div>

    </>
  )
  }
