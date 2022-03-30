import React from 'react'
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/card/ProductCard';
import Navbar from '../../components/navbar/Navbar';
import { useAthorizer } from '../../context/AuthorizerContext';

function Wishlist() {

    const {authState,authDispatch } = useAthorizer();
    const {loginStatus,encodedToken} = authState;
    const navigator =useNavigate();

    return authState.loginStatus? ( authState.wishlist.length > 0 ? <>
                <Navbar/>
                <div className="wishlist-container flex-center flex-col gap-lg" >
                    <div className="padd-md" ><h1> My Wishlist</h1></div>
                    <div className=" wishlist-card flex-center">
                        {authState.wishlist.map((product) => <ProductCard product={product} key={product._id} /> ) }
                    </div>
                </div>     
            </>:<>
            <Navbar/> 
            <div className='flex-center flex-col' > 
                    <h1>No Items In wishlist </h1> 
                    <button className='nav-login-btn' onClick={()=>navigator("/products")} >SHOP NOW</button> 
            </div>  
            </>) : <>
            <Navbar/>
                <div className='flex-center flex-col'> <h1>Need To login</h1></div>
            </>


}

export default Wishlist;
