import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import CartCard from '../../components/card/CartCard';
import PriceDetailCard from '../../components/card/PriceDetailCard';
import Navbar from '../../components/navbar/Navbar';
import { useAthorizer } from '../../context/AuthorizerContext';

function Cart() {
    
    const { authState , authDispatch } = useAthorizer();
    const navigator=useNavigate();
    const { cart } = authState;

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src ;
            script.onload = () =>{
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    useEffect(() => {
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
    });

    return authState.loginStatus? ( authState.cart.length > 0 ?<>
        <Navbar/>
        <h1>My Cart</h1>

        <div className="flex-center cart-container" >
            <div className=" cart-listbox flex-col bx-shadow">

                {cart.map( (product) => <CartCard product={product} key={product._id} /> ) }
                
            </div>
            <PriceDetailCard cart={cart} />
        </div>     
  </>:<>
    <Navbar/> 
    <div className='flex-center flex-col' > 
            <h1>No Items In Cart </h1> 
            <button className='nav-login-btn' onClick={()=>navigator("/products")} >SHOP NOW</button> 
    </div>  
   </>) : <>
   <Navbar/>
        <div className='flex-center flex-col'> <h1>Need To login</h1></div>
   </>
}

export default Cart;
