
import React from 'react';
import Banner from '../../components/banner/Banner';
import BannerOffer from '../../components/banner/BannerOffer';
import Category from '../../components/category/Category';


function Home (){

    return <>
        <div>This is home page </div>
        <Banner/>
        <Category/>
        <BannerOffer/>
    </>

}

export default Home ;