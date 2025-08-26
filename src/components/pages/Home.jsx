import React from 'react';
import Header from '../layouts/Header';
import Banner from '../layouts/Banner';
import Terms from '../layouts/Terms';
import Sales from '../layouts/Sales';
import NewArrival from '../layouts/NewArrival';
import BestSelling from '../layouts/BestSelling';

const Home = () => {
  return (
    <>
    <Banner/>
    <Terms/>
    <Sales/>
    <NewArrival/>
    <BestSelling/>
    </>
  )
}

export default Home