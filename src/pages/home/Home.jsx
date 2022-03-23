
import React from 'react';
import Banner from '../../components/banner/Banner';
import BannerOffer from '../../components/banner/BannerOffer';
import Category from '../../components/category/Category';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';


function Home (){

    return <>
        <Navbar/>
        <Banner/>
        <Category/>
        <BannerOffer/>
        <Footer/>
    </>

}

export default Home ;