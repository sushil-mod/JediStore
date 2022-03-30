import axios from 'axios';
import React from 'react'
import { useAthorizer } from '../../context/AuthorizerContext';
import {FaHeart} from 'react-icons/fa' 
import { useNavigate } from 'react-router-dom';
import {addToWishlist,removeFromWishlist,productQtyHandler ,removeFromCart} from '../../service calls/sevices'

function CartCard({product}) {
  
    const {_id , name , rating , orignalPrice , discount , imageUrl , qty} = product;
    const { authState , authDispatch } = useAthorizer();
    const {loginStatus,encodedToken}=authState
    const navigator=useNavigate();
    const request = {encodedToken,authDispatch,navigator }
    
  return <>          
                <div className="card card-horizontal" >

                    <img className="card-img img-height " style={{ height: " 100%"  }}  src={imageUrl} alt="Lago di Braies" />

                    <div className="card-details card-pd-left">

                        <div className="card-header">{ name }</div>

                        <div className="cart-qty padd-top-sm padd-btm-sm">

                            <p>Qty</p> 
                            <button className="cart-qty-btn padd-sm" onClick={()=> qty > 1? productQtyHandler(_id,"decrement",request) : removeFromCart(_id,request) } >
                                <i className="fas fa-minus"></i>
                            </button>

                            <input className="cart-qty-input" value={qty} readOnly />

                            <button className="cart-qty-btn padd-sm"  onClick={()=> productQtyHandler(_id,"increment",request)} >
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>

                        <div className="flex-space-btw">

                            <span className=" card-rating">{rating}<i className="fas fa-star"></i></span>

                            <span>Rs :
                                <h4 className="inline-block price"> { Math.ceil(( orignalPrice * (100 - discount)) / 100) }
                                <span className='original-price'>
                                <sup>{orignalPrice} </sup>
                                </span>({ discount }% OFF)
                                </h4>
                            </span>
                        </div>

                        <button className="btn btn-shop card-fix-btn card-btn-sec flex-center"
                         onClick={()=> ( loginStatus && authState.wishlist.some((item)=>item._id===_id)) ?
                                removeFromWishlist(_id,request) : addToWishlist(product,request) 
                                }> 
                            <FaHeart  />
                            {
                                ( loginStatus && authState.wishlist.some((item)=>item._id===_id)) ? 
                                <span>Remove From wishlist</span> :
                                <span>Add To wishlist</span>  
                            }
                        </button>
                        <button className="btn btn-shop card-fix-btn card-btn-pri " onClick={()=> removeFromCart(_id,request)} >
                            Remove from Cart
                        </button>

                    </div>

                </div>
            

  </>
}

export default CartCard ;
