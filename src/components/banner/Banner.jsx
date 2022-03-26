
import React from 'react';
import { Link } from 'react-router-dom';



function Banner (){

    return<>
        <div className="home-img-div pos-rel bx-shadow">
            <img className="wd-100 height-100" src='./assets/bannerTop.jpg' alt="starWarImage"/>
            <div className="home-img-txt pos-abt">
                <h1>Jedi Store </h1> 
                <p className="padd-md">Feel the force with our collection of toys, action figures, costumes & more.</p>
                <Link to="/products"><button className="btn shop-btn " >Shop Now </button></Link>
            </div>
        </div>
    </>
}

export default Banner;