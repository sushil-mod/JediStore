
import React from 'react';
import { Link } from 'react-router-dom';



function Banner (){

    return<>
        <div class="home-img-div pos-rel bx-shadow">
            <img class="wd-100 height-100" src='./assets/bannerTop.jpg' alt="starWarImage"/>
            <div class="home-img-txt pos-abt">
                <p><h1>Jedi Store </h1> </p>
                <p class="padd-md">Feel the force with our collection of toys, action figures, costumes & more.</p>
                <Link to="/"><button class="btn shop-btn " >Shop Now </button></Link>
            </div>
        </div>
    </>
}

export default Banner;