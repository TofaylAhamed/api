import React from 'react'
import Container from '/src/components/Container'
import Product from '../Product'
import Flex from '../Flex'
import productOne from '/src/assets/productOne.png'
import productTwo from '/src/assets/productTwo.png'
import productThree from '/src/assets/productThree.png'
import productFour from '/src/assets/productFour.png'
import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
 import PrevArrow from "../PrevArrow";
 import axios  from 'axios';
 import { useState,useEffect } from 'react';

const NewArrival = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  let [allData,setAllData] = useState([]);
  useEffect(() => {
    async function alldatas() {
      let data=await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    alldatas();
  }, []);
  return (
    <>
    <Container>
      <h3 className='pb-4 font-bold text-3xl'>New Arrivals</h3>
    <div className="-mx-3">
      <Slider {...settings}>
      {allData.map((item) => (
      <div>
          <Product ProductImg={item.thumbnail} ProductBadge={item.category} price={`$ ${item.price}`} title={item.title}/>
      </div>
      ))}
    </Slider>
    </div>
    </Container>
    </>
  )
}

export default NewArrival