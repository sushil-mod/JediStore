import axios from 'axios';
import React from 'react';
import { FaShoppingCart,FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAthorizer } from '../../context/AuthorizerContext';
import {addToWishlist ,removeFromWishlist ,addToCart } from '../../service calls/sevices';
import './ProductCard.css'
  

function ProductCard ( {product}){

const {_id , name , rating , orignalPrice , discount , imageUrl , categoryName , tag , description} = product;
const { authState ,authDispatch } = useAthorizer();
const {loginStatus,encodedToken} =authState
const navigator =useNavigate();
const request = {encodedToken,authDispatch,navigator }

return <div key={_id}>
    <div className="card card-pos-rel">
        <img className="card-img" src={imageUrl} alt="Lago di Braies" />

        <button className="dismiss" 
            onClick={
                    ()=> ( loginStatus && authState.wishlist.some((item)=>item._id===_id)) ? 
                    removeFromWishlist(_id,request) : 
                    addToWishlist(product,request) 
                    } >
           {
                ( loginStatus && authState.wishlist.some((item)=>item._id===_id)) ? 
                <i className="fas fa-heart wishlist-icon wishlist-color" ></i> :
                <i className="fas fa-heart wishlist-icon " ></i> 
           }
        </button>

        { tag==="Trending" && <span className="card-badge">{tag}</span>}
        { tag==="New Arrival" && <span className="card-badge badge-arrival">{tag}</span> }

        <div className="card-details">

            <div className='flex-space-btw'>
                <div>
                    <span className="card-tag">{ categoryName }</span>
                    {tag&&<span className="card-tag">{ tag }</span>}
                </div>

                <div>
                    <span className=" card-rating">{rating}
                        <FaStar /> </span>
                </div>
            </div>
            <div className="card-header">{ name }</div>
            <p className="card-text">{description}</p>
            <div className="flex-space-btw">
                <span>Rs :
                    <h4 className="inline-block price"> { Math.ceil(( orignalPrice * (100 -
                        discount)) / 100) }
                        <span className='original-price'>
                            <sup>{orignalPrice} </sup>
                        </span>
                        ({ discount }% OFF)
                    </h4>
                </span>
            </div>
            { (loginStatus && authState.cart.some((item)=>item._id===_id)) ? (<button className="btn btn-shop card-fix-btn card-btn-sec" onClick={()=>navigator("/cart") }  >
                        <FaShoppingCart /> Go to Cart </button>)
                            :
                    (<button className="btn btn-shop card-fix-btn card-btn-pri " onClick={()=>addToCart(product,request) }  >
                        <FaShoppingCart /> Add to Cart </button>) }
        </div>
    </div>
</div>

}
export default ProductCard;