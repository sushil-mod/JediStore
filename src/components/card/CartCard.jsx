import axios from 'axios';
import React from 'react'
import { useAthorizer } from '../../context/AuthorizerContext';

function CartCard({product}) {
  
    const {_id , name , rating , orignalPrice , discount , imageUrl , qty} = product;
    const { authState , authDispatch } = useAthorizer();

    const productQtyHandler = async( productId , type ) => {
        try {
         const response = await axios.post(`/api/user/cart/${productId}`,{action:{type:`${type}`}},{headers:{authorization :authState.encodedToken }})   
            authDispatch({ type:"QUANTITY" , payload : response.data.cart})
        } catch (error) {
            console.log(error);
        }
    }

    const removeFromCart = async(productId) =>{
        try {
                const response = await axios.delete(`/api/user/cart/${productId}`,{headers:{authorization :authState.encodedToken }})
                authDispatch({type:"REMOVE_FROM_CART" , payload:response.data.cart});
        } catch (error) {
            console.log(error);
        }
    }

  return <>
                          
                <div className="card card-horizontal" >

                    <img className="card-img img-height " style={{ height: " 100%"  }}  src={imageUrl} alt="Lago di Braies" />

                    <div className="card-details card-pd-left">

                        <div className="card-header">{ name }</div>

                        <div className="cart-qty padd-top-sm padd-btm-sm">

                            <p>Qty</p> 
                            <button className="cart-qty-btn padd-sm" onClick={()=> qty > 1? productQtyHandler(_id,"decrement") : removeFromCart(_id) } >
                                <i className="fas fa-minus"></i>
                            </button>

                            <input className="cart-qty-input" value={qty} readOnly />

                            <button className="cart-qty-btn padd-sm"  onClick={()=> productQtyHandler(_id,"increment")} >
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

                            {/* <span>Price :<h3 className="inline-block">₹ { Math.ceil(( orignalPrice * (100 -
                        discount)) / 100) } </h3> </span> */}

                        </div>

                        <button className="btn btn-shop card-fix-btn card-btn-sec "> <i className="fas fa-heart"></i> <span>Move to
                                Wishlist</span> </button>
                        <button className="btn btn-shop card-fix-btn card-btn-pri " onClick={()=> removeFromCart(_id)} >Remove from Cart</button>

                    </div>

                </div>
            

  </>
}

export default CartCard ;
